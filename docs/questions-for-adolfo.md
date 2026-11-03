# Things to confirm with Adolfo — agorasotogrande.com (updated 19 Oct 2026)

Facts currently on the testing site that are assumptions. Each one is written somewhere on the site; once Adolfo confirms, update `lib/pages.ts` / `lib/content.ts`.

## Capacity and formats
- [ ] **Maximum capacity**: site says "around 400 between terrace and club floor, larger on request". Confirm the legal aforo (terrace + inside) and what we are comfortable publishing. Chris's estimate: 400–450 published, ~800 physical.
- [ ] **Seated dinner maximum** on the terrace: site says "works best up to around 120". Real number?
- [ ] **Minimum for a group dinner**: site says **20** everywhere (menu page, Christmas, pre-weddings, birthdays). Confirm — is 20 enough to open the kitchen, or should it be higher?
- [ ] **Exclusive hire minimum**: site says "from around 150 guests".
- [ ] **Walk-in dinners**: site now says the restaurant is **pre-booked groups only**, no walk-in service. Confirm this is right for the whole year.

## Christmas
- [ ] **Tardeos**: site says "afternoon sessions on weekends through the Christmas season, dates on the calendar". Which days? Weekends only? From what date?
- [ ] **Christmas lunches** for groups of 20+: offered?
- [ ] Special nights over the holidays: Christmas Eve / 26 Dec / New Year's Eve — which ones actually open? (Three Kings removed as requested.)
- [ ] Resident DJ "Fridays and Saturdays in December" — correct?

## Club nights / tables
- [ ] **Table arrival cut-off**: FourVenues shows 2:00 am for Oasis Halloween; site says "usually 1:00 or 2:00 am". Is there a standard?
- [ ] **Age**: 18+ on all club nights?
- [ ] **Birthday extras**: sparklers on bottles + name / "Happy Birthday" boards — anything else (e.g. photographer)? Cake removed as requested.
- [ ] Weekday availability for private hire: site says "Monday, Wednesday and Sunday in season" (the days Google lists as closed). Correct?

## Corporate
- [ ] Can you invoice Gibraltar / UK / EU companies with Spanish VAT? (site says yes)
- [ ] Any named companies or schools we can mention as references? ("Several international schools return every year" is on the graduations page — ok?)

## Weddings
- [ ] Symbolic ceremonies in the garden — ok to offer?
- [ ] Pre-wedding dinners "most are 30–80 guests" — true to experience?

## Contact / legal
- [ ] **Phone on the site**: +34 669 99 78 88 (from the Google listing). Is this the number for enquiries?
- [ ] **Enquiry form destination**: which email should enquiries go to? (default info@agorasotogrande.com). Needs a Resend account + domain verification, or a webhook — Chris to set up.
- [ ] **Legal name, CIF and registered address** for Legal Notice, Privacy and Cookie pages (placeholders now).
- [ ] Opening hours per season for the footer / Google.

## Assets
- [ ] **Carta / menus PDF** for the group-dinners page (placeholder now).
- [ ] **Partner logo packs** (white/mono SVG) from Estrella Galicia, Red Bull (current file is the Racing Team logo — wrong one), Bacardí-Martini (Bacardí + Grey Goose), Coca-Cola Europacific (Royal Bliss).
- [ ] **Photos for Clandestina and Perreo Lab** nights, the restaurant/food and the terrace in daylight (for tardeos).
- [ ] **Instagram token** for the live feed — see `claude/instagram-feed-setup.md` in the project (20 min with Adolfo logged into the IG account).
- [ ] Google Search Console + GA4 access / property ID.

## Round 2 (not Phase 1)
- Individual pages for each night (Clandestina, Perreo Lab, Oasis, Daikiri).
- FourVenues API: native event cards and checkout (see `claude/fourvenues-api-plan.md`).
