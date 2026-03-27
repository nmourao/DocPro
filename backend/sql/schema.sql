CREATE TYPE plan_type AS ENUM ('free', 'premium');
CREATE TYPE document_category AS ENUM (
  'identification',
  'tax',
  'insurance',
  'property',
  'vehicle',
  'contract',
  'warranty',
  'medical',
  'education',
  'family',
  'other'
);

CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  two_factor_enabled BOOLEAN NOT NULL DEFAULT FALSE,
  plan plan_type NOT NULL DEFAULT 'free',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE families (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  owner_user_id UUID NOT NULL REFERENCES users(id)
);

CREATE TABLE family_members (
  family_id UUID NOT NULL REFERENCES families(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  role TEXT NOT NULL,
  PRIMARY KEY (family_id, user_id)
);

CREATE TABLE documents (
  id UUID PRIMARY KEY,
  owner_user_id UUID NOT NULL REFERENCES users(id),
  family_id UUID REFERENCES families(id),
  title TEXT NOT NULL,
  category document_category NOT NULL,
  issue_date DATE,
  expiry_date DATE,
  reminder_days_before_expiry INT NOT NULL DEFAULT 30,
  notes TEXT,
  file_url TEXT NOT NULL,
  encrypted_key_ref TEXT NOT NULL,
  tags TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE assets (
  id UUID PRIMARY KEY,
  owner_user_id UUID NOT NULL REFERENCES users(id),
  family_id UUID REFERENCES families(id),
  name TEXT NOT NULL,
  asset_type TEXT NOT NULL,
  description TEXT,
  purchase_date DATE,
  purchase_price NUMERIC(14,2),
  current_value NUMERIC(14,2),
  notes TEXT
);

CREATE TABLE subscriptions (
  id UUID PRIMARY KEY,
  owner_user_id UUID NOT NULL REFERENCES users(id),
  family_id UUID REFERENCES families(id),
  name TEXT NOT NULL,
  amount NUMERIC(10,2) NOT NULL,
  next_payment_date DATE NOT NULL,
  frequency TEXT NOT NULL,
  reminder_days_before INT NOT NULL DEFAULT 3
);

CREATE TABLE reminders (
  id UUID PRIMARY KEY,
  owner_user_id UUID NOT NULL REFERENCES users(id),
  family_id UUID REFERENCES families(id),
  source_type TEXT NOT NULL,
  source_id UUID,
  remind_at TIMESTAMPTZ NOT NULL,
  channel TEXT NOT NULL,
  sent_at TIMESTAMPTZ
);

CREATE INDEX idx_documents_owner ON documents(owner_user_id);
CREATE INDEX idx_documents_expiry ON documents(expiry_date);
CREATE INDEX idx_subscriptions_next_payment ON subscriptions(next_payment_date);
