# Life Admin

**Your life, organized in one place.**

Life Admin is a cross-platform personal life management system with:
- **Web app** (Next.js + React)
- **Mobile app** (React Native)
- **Backend API** (Node.js + Express)
- **PostgreSQL** data model

## Product highlights
- Dashboard with deadlines, expiring docs, bills, subscriptions, uploads, alerts, and asset summary.
- Document Vault with categories, metadata, reminders, and tags.
- Asset Management for property, vehicles, accounts, investments, and valuables.
- Subscription & recurring payment tracker.
- Deadline automation and reminder scheduling.
- Family mode with sharing and emergency contacts.
- Security-first architecture (2FA-ready, encrypted file storage strategy).
- Global search across core entities.
- AI assistant endpoint + UX for life admin insights.
- Monetization support (Free vs Premium plans).

## Monorepo structure
```
web/        # Next.js web experience
mobile/     # React Native mobile experience
backend/    # Express API + domain services
```

## Quick start (concept scaffold)
This repository provides a functional starter scaffold and domain model for implementation.

1. Web
   - Build UI components and connect to API client in `web/src/lib/api.ts`.
2. Mobile
   - Mirror web experience with `mobile/src/App.tsx` and shared backend contracts.
3. Backend
   - Implement routes in `backend/src/routes.ts`.
   - Apply schema in `backend/sql/schema.sql`.

## Pricing model
- Free: up to **10 documents**.
- Premium: **€4.99/month** or **€49/year**, includes unlimited docs + family mode + AI assistant.
