# Portfolio fill-me checklist

The client-facing structure is already in place. These are the remaining items worth filling when you have real information.

## 1. Microfinance project

The main case study is already written around your 3 years of involvement and is intentionally shown without screenshots or source code.

Before publishing, review the wording in `src/App.tsx` and remove anything your employer considers confidential. If you are allowed to show sanitized screenshots later, add an `image` to that project object.

## 2. Scholarship rebuild

When the modern rebuild is ready, update project `02`:

```ts
status: "Live",
liveUrl: "https://your-demo-url.com",
repoUrl: "https://github.com/your-account/your-repo",
```

Also replace the old stack tags with the actual rebuild stack.

## 3. Experience company name

The portfolio currently uses:

```ts
company: "Microfinance Organization"
```

Replace it with the real organization name only if you are comfortable making it public.

## 4. Testimonials

The testimonials section is hidden because this stays empty:

```ts
const testimonials: readonly Testimonial[] = [];
```

Add only real quotes that the person has approved for public use.

## 5. LinkedIn

If you have a public LinkedIn profile, add it to the footer beside GitHub and email.

## 6. Real outcomes

Do not invent percentages. If you later have defensible numbers such as processing time saved, users supported, branches covered, reports generated, or reduced manual steps, add them to the relevant project `outcomes` array.
