# Ask Jedi Bot — where requests land

No write tokens or paid APIs in client code.

## Primary (always)
Free **ntfy.sh** topic `freshbites-atrium-jedi-9c4e2a71`.

Read latest (America/Chicago when reporting times):

```bash
curl -sS "https://ntfy.sh/freshbites-atrium-jedi-9c4e2a71/json?poll=1&since=7d"
```

Each message title is `[Atrium Request] <app>` and the body includes App, Page, From (signed-in email), When, Screenshot URL/attachment, and the request text.

## Email mirror (when FormSubmit is healthy)
FormSubmit → `teri.huff.solutions@gmail.com` (connected as default `user-Gmail`).
Subject prefix: `[Atrium Request]`.

Read with Gmail tools:

```
search_emails query: subject:"[Atrium Request]"
```

**One-time:** the first successful FormSubmit delivery sends an activation email to that inbox — open the confirm link once. Until then the UI may show status `confirm`.

## Why not GitHub Issues from the browser?
Creating Issues needs a write credential. Putting a PAT/App token in static Pages JS would expose it publicly, so we do not do that.
