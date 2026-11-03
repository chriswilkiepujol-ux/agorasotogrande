# agorasotogrande.com — DNS inventory and launch plan (3 Nov 2026)

Registrar: **GoDaddy** (paid until 19 Aug 2027, auto-renew on). Nameservers today: **WordPress.com** (ns1–3.wordpress.com), so records are currently edited in WordPress.com → Domains → agorasotogrande.com → DNS records.

**Decision (Chris, 3 Nov):** move DNS to GoDaddy and stop paying WordPress.com once the new site is live on Vercel.

## Current records (copied from WordPress.com, 3 Nov 2026)

| Type | Name | Value | What it is |
|---|---|---|---|
| A | @ | Handled by WordPress.com (192.0.78.176, 192.0.78.224) | the old site |
| CNAME | www | agorasotogrande.com | www → root |
| CNAME | * | agorasotogrande.com | wildcard subdomains |
| MX | @ | smtp.google.com (priority 1) | Google Workspace email (info@) |
| TXT | google._domainkey | v=DKIM1;k=rsa;p=MIIB… | Google Workspace DKIM |
| TXT | @ | v=spf1 include:_spf.wpcloud.com include:mailgun.org ~all | SPF (missing Google) |
| TXT | _dmarc | v=DMARC1;p=none; | DMARC |
| TXT | @ | google-site-verification=5hJDD… | Google verification |
| TXT | @ | google-site-verification=QS72K… | Google verification |
| CNAME | wpcloud1._domainkey / wpcloud2._domainkey | …wpcloud.com | DKIM for WordPress.com mail |
| CNAME | email | eu.mailgun.org | Mailgun (WordPress.com) |
| TXT | mta._domainkey | k=rsa; p=MIGf… | DKIM, unknown sender |
| TXT | _domainconnect | public-api.wordpress.com/… | WordPress.com Domain Connect |

## Records to create in GoDaddy

| Type | Name | Value |
|---|---|---|
| MX | @ | smtp.google.com, priority 1 |
| TXT | google._domainkey | the full v=DKIM1… value, copied exactly |
| TXT | @ | v=spf1 include:_spf.google.com ~all |
| TXT | _dmarc | v=DMARC1;p=none; |
| TXT | @ | google-site-verification=5hJDD… |
| TXT | @ | google-site-verification=QS72K… |
| TXT | @ | the Search Console verification value added on 3 Nov |
| A | @ | WordPress (192.0.78.176 and 192.0.78.224) until launch, then Vercel |
| CNAME | www | agorasotogrande.com until launch, then Vercel |

Drop: wpcloud1/2._domainkey, email → mailgun, _domainconnect, the * wildcard. Check with Adolfo whether anything else sends mail as @agorasotogrande.com before dropping mta._domainkey. Resend (enquiry form) adds its own records later.

## Order
1. **Now:** Search Console TXT added in WordPress.com (done 3 Nov; history available).
2. **A few days before launch:** in GoDaddy, switch nameservers back to GoDaddy's defaults and immediately create the records above, with the site still pointing at WordPress. Test email to and from info@.
3. **Launch day (GoDaddy):** add agorasotogrande.com and www in Vercel (www as a redirect to the root — half of all search clicks come through http://www), point A @ and CNAME www at the values Vercel gives, wait for SSL, remove noindex, submit the sitemap, spot-check 301s.
4. **About a week after launch:** export Jetpack Stats, download a site backup, then turn off auto-renew and cancel the WordPress.com plan and domain connection.
