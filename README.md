# Gomez Enterprise Group — Website

Everything's built: Hero, About, Services (with the Built For You / With You /
By You toggle), Work, Reviews (placeholder — see note below), and Contact.

## Before you go live — 1 thing left

1. **Formspree is already connected** (form ID mdenpyrv is live in the code).
   The first real submission still needs a confirmation click from your
   email before Formspree fully activates — send yourself a test message
   through the live site once it's deployed, and check your inbox.

2. **Reviews are placeholders.** Nothing in the Reviews section is a real
   review — each card is clearly marked "Sample — not a real review" on
   purpose, so it never looks like a fake testimonial. Once you've collected
   a couple of real ones, either edit `src/components/Reviews.jsx` directly
   with real quotes, or swap the whole section for a Google Reviews /
   Elfsight widget later.

## Deploying (no coding experience needed)

Step 1 — Get a GitHub account.
If you don't have one, sign up free at github.com. Create a new repository
(call it `geg-site` or anything you like).

Step 2 — Upload the files.
In your new GitHub repo, click "Add file -> Upload files", then drag in
everything from this folder EXCEPT the `node_modules` folder (it's not
included in this zip anyway). Commit the upload.

Step 3 — Connect Vercel.
Go to vercel.com, sign up using your GitHub login. Click "Add New ->
Project", pick your geg-site repo, and click Deploy. Vercel automatically
detects this is a Vite project, no settings to change. In a minute or two
you'll have a live link like geg-site.vercel.app.

Step 4 — Point your domain at it.
In your Vercel project, go to Settings -> Domains, type in
gegconsulting.online, and add it. Vercel will show you an A record and a
CNAME value.

Now go to your GoDaddy account (DNS settings for gegconsulting.online).
GoDaddy usually has default parked-domain records already there — edit the
EXISTING A record (don't add a duplicate) to match the value Vercel gave
you, and do the same for the CNAME record (usually for "www").

Step 5 — Wait it out.
DNS changes can take a few minutes to ~24 hours to fully update everywhere.
If the site doesn't look right after a bit, don't panic — check
dnschecker.org with your domain to see if it's propagated, and try loading
the site on your phone's cellular data (not wifi) to rule out your own
network just showing you a cached old version.

## Running it locally (optional, if you want to preview before deploying)

npm install
npm run dev

Then open the local address it prints in your browser.

## What's still open

- Formspree ID (required — see above)
- Instagram handle / social links (add to src/components/Footer.jsx where marked)
- Real client reviews, whenever you have them
- Brits Card Watch portfolio entry (add to src/components/Portfolio.jsx once details are confirmed)
- Pricing is intentionally not shown publicly yet — the Services section links to the contact form for a custom quote instead
