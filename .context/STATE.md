# Journey of Faith Website — Project State

**Last updated:** 2026-07-21 22:54 EDT

## Current Live State

- **Correct site is live** at `journey-of-faith-ypsi.netlify.app` and `jofdisciples.com` / `jofdisciples.net`
- **Git main** is at commit `68b8b4a` (81cbaa3 + tonight's fixes)
- **Netlify auto-deploys** from `main` branch on GitHub repo `git@github.com:btrailor/Journey-of-Faith-Ypsi-Website.git`

## Domain Status

| Domain | DNS | SSL | Status |
|--------|-----|-----|--------|
| jofdisciples.com | Netlify DNS (p09) | ✅ Working | **Primary** |
| jofdisciples.net | Netlify DNS (p05) | ✅ Working | Domain alias |
| jofdisciples.org | Netlify DNS (p07) | ❌ Serving `*.netlify.app` cert | Domain alias — needs SSL cert provisioning |
| journey-of-faith-ypsi.netlify.app | Netlify CDN | ✅ Working | Netlify subdomain |

### `.org` SSL Issue (Open)
- `jofdisciples.org` is listed as a domain alias in Netlify UI
- DNS resolves to correct Netlify IPs (18.208.88.157, 98.84.224.111)
- But SSL cert served is `*.netlify.app`, not `jofdisciples.org`
- No "Provision certificate" button visible in Netlify UI
- **Next step:** May need to remove `.org` from the domain list and re-add it, or contact Netlify support. Could also be a DNS zone conflict (p07 zone from an old site vs p09 for .com).

## Tonight's Changes (commit 68b8b4a)

Applied on top of commit 81cbaa3 (July 14 good deploy):

1. ✅ FAQ: "Who can take communion?" — replaced placeholder with open-table text
2. ✅ FAQ: "Do you have online services?" — "join with this link" hyperlinked to YouTube live
3. ✅ Contact: Instagram and Facebook hyperlinked, open in new tab
4. ✅ Contact: Map link added, opens in new tab
5. ✅ About: "Connecting with ALL" → "connect with ALL"
6. ✅ h1 and h3 font sizes increased by ~5px (h1: 2.8125rem, h3: 2.0625rem)

### NOT yet applied (from original request)
- Slideshow Chrome fix: The good site (81cbaa3) uses a hero video, not a slideshow with HEIC images. The slideshow images exist but are in a secondary section. Need to verify if the Chrome issue still exists on this version.

## What Went Wrong Tonight (Postmortem)

1. **Bad merge** (`450c383`): A subagent merged an old version of the site into `main`, overwriting weeks of work with an ancient static site. This got pushed to GitHub and Netlify auto-deployed it.
2. **Multiple stale copies**: The repo audit found old copies in iCloud Drive and other locations, which caused confusion about which was the source of truth.
3. **Force-pushes**: Multiple force-pushes were needed to recover, causing churn and risk.
4. **Root cause**: The subagent did a `git merge` with an `ours` strategy that kept the wrong side, then pushed without verifying the live site matched.

### Lesson
- Never merge remote into local without verifying the result deploys correctly
- Always curl the live site after any git push to verify content
- One repo, one source of truth — purge stale copies
- Consider branch protection on `main` to prevent force-pushes

## Repo Audit

Full audit report at: `~/.openclaw/workspace/reports/jof-repo-audit_2026-07-21.md`

Source of truth: `~/journey-of-faith-ypsi-website`
Remote: `git@github.com:btrailor/Journey-of-Faith-Ypsi-Website.git` (note: GitHub shows a redirect from the old URL)

## Credentials (session-only, do NOT persist)

- Porkbun API keys: provided by Brett, used for DNS management, not stored in memory
- Netlify token: provided by Brett, expired, not stored in memory