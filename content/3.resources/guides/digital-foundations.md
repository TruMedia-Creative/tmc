---
title: "Digital Foundations: A Plain-English Guide to Your Website, Domain & Email"
description: "A simple, no-jargon guide for small-business owners who want to understand the difference between a website, domain, URL, DNS, and business email."
seo:
  title: "Digital Foundations: Website, Domain & Email Guide"
  description: "A plain-English guide to domains, URLs, DNS, websites, hosting, and business email records like MX, SPF, DKIM, DMARC, and BIMI."
image:
  src: /images/services/website-growth-system/website-system-included.png
authors:
  - name: Lar
    to: https://www.linkedin.com/in/larryontrumanii
    avatar:
      src: /images/who-we-are-photos/Lar-headshot.png
date: 2026-10-02
badge:
  label: Guide
---

If you have ever thought, "my website, domain, email, URL, and DNS are all basically the same thing," you are not alone.

They are related, but they are not the same thing. Think of your business's online setup like a small storefront:

- Your domain is the name people recognize.
- Your website is what people see when they visit.
- Your URL is the full address to a specific place.
- Your DNS is the behind-the-scenes directions.
- Your email provider handles your inboxes.
- Your registrar is where the domain registration is managed.

For this guide, we will use one fake business as the example: **Maple & Main Bakery** with the domain **mapleandmain.com**.

## The short version

Here is the cleanest way to separate the pieces.

| Thing | Plain-English Meaning | Example |
| --- | --- | --- |
| Domain name | The human-friendly name people type or recognize | `mapleandmain.com` |
| Website | The pages, words, images, buttons, forms, and code people see | Your homepage, menu page, contact page |
| URL | The full address to one page or file | `https://mapleandmain.com/catering` |
| Web hosting | The place where the website files/app live | Your website platform or server |
| DNS | The directions that tell browsers and inboxes where to go | "Send website visitors here and email there" |
| Registrar | The company where the domain is registered and renewed | Cloudflare Registrar, GoDaddy, Namecheap, etc. |
| Email provider | The company that runs your inboxes | Google Workspace, Microsoft 365, etc. |

The domain is not the website. The website is not the email. The URL is not the domain. DNS is not a public page. They work together, but each job is different.

If you are thinking about rebuilding the part people actually see, start with our [Website Design](/services/web-design) page. This guide is here to help you understand the foundation underneath it.

## What is a domain name?

A domain name is the easy-to-read name people use to reach something online.

For Maple & Main Bakery, the domain is:

```text
mapleandmain.com
```

Computers do not naturally think in names like that. They route traffic using technical addresses. DNS helps translate the friendly name into the technical destination a browser or mail system needs.

So when someone types `mapleandmain.com`, the internet asks, "Where should this name point?"

That answer comes from DNS.

## How is a domain name different from a URL?

A domain name is only one part of a URL.

```text
https://mapleandmain.com/catering
```

In that URL:

- `https://` is the protocol. In normal terms, it tells the browser how to connect.
- `mapleandmain.com` is the domain name.
- `/catering` is the path to a specific page.

So if someone asks for "the URL," they usually mean the full address to a specific page. If they ask for "the domain," they usually mean the main name, like `mapleandmain.com`.

## What are the parts of a domain name?

Domain names are read from right to left, from broad to specific.

In:

```text
mapleandmain.com
```

- `.com` is the top-level domain, often called the TLD.
- `mapleandmain` is the second-level domain, which is usually the part your business chooses.

In:

```text
shop.mapleandmain.com
```

- `shop` is a subdomain.
- `mapleandmain.com` is still the main domain.

Subdomains are often used to separate areas of a business, like `shop.`, `blog.`, `support.`, or `portal.`.

## Who manages domain names?

There are a few layers.

**Registries** manage entire endings like `.com`, `.org`, or country-based endings. **Registrars** are the companies that sell and manage registrations for regular customers. **Registrants** are the people or businesses that register a domain.

In everyday business terms: your registrar is the company you log into to renew the domain, update contact details, manage registration settings, or point the domain somewhere else.

Important detail: buying a domain usually means registering it for a period of time. If it expires and is not renewed, you can lose control of it. That is why domain renewal access matters so much.

## What is the difference between a domain and a website?

The domain is the name. The website is the thing people see.

Maple & Main Bakery might own:

```text
mapleandmain.com
```

But that domain can point to different website platforms over time. Today it might point to a custom Nuxt website. Next year it might point to Shopify, Webflow, WordPress, Squarespace, or another host.

Changing the website does not automatically mean changing the domain. Changing the domain does not automatically move the website. They are connected through DNS settings.

That is why a good website project should account for more than design. The site, hosting, forms, analytics, search visibility, and email handoffs all need to be handled carefully. Our [Website Growth System](/services/web-design) is built around that bigger picture.

## What is DNS?

DNS stands for Domain Name System. Plain English: DNS is the internet's direction system for your domain.

DNS answers questions like:

- When someone visits `mapleandmain.com`, where should the website load from?
- When someone emails `hello@mapleandmain.com`, which email provider should receive it?
- Which services are allowed to send email for this domain?
- Which company controls the official DNS records?

DNS is powerful because one domain can connect several services at once. Your website might be hosted by one company, your email by another, and your scheduling tool by another.

That is also why random DNS changes can break things quickly.

DNS also affects how cleanly your marketing tools connect. If you are running campaigns, tracking conversions, or trying to improve search visibility, our [SEO & Paid Ads](/services/seo-and-paid-ads) service is the more practical next stop.

## Common DNS records in plain English

You do not need to memorize these, but it helps to know what they do.

| Record | What It Does | Plain-English Example |
| --- | --- | --- |
| A | Points a domain to an IPv4 address | "Send website visitors to this server" |
| AAAA | Points a domain to an IPv6 address | Same idea as A, using a newer address format |
| CNAME | Points one name to another name | "`www` should follow `mapleandmain.com`" |
| MX | Tells the internet where email should be delivered | "Send email to Google Workspace" |
| TXT | Stores text instructions used by services | Email verification, SPF, DMARC, ownership checks |
| NS | Tells which nameservers control the DNS zone | "Cloudflare is managing the DNS records" |
| TTL | Says how long other systems can remember a DNS answer | "Do not re-check this answer for a while" |

TTL is why DNS changes are not always instant. Some systems may keep using the old answer until their saved copy expires.

## What is MX?

MX stands for Mail Exchange. MX records tell the internet where to deliver email for your domain.

If someone sends an email to:

```text
hello@mapleandmain.com
```

the sending mail system checks the domain's MX records to find the correct email provider. If the MX records point to Google Workspace, Google receives the mail. If they point to Microsoft 365, Microsoft receives it.

If MX records are deleted or pointed at the wrong provider, email can stop arriving.

## What are SPF, DKIM, and DMARC?

These are email trust records. They help receiving inboxes decide whether a message claiming to be from your domain looks legitimate.

| Term | Plain-English Meaning |
| --- | --- |
| SPF | A list of services allowed to send email for your domain |
| DKIM | A digital signature that helps prove a message was not changed in transit |
| DMARC | A policy that tells inboxes what to do when SPF or DKIM checks fail |

Here is the simple version.

If Maple & Main uses Google Workspace and Mailchimp, the domain's SPF record may need to say those services are allowed to send email. DKIM adds a stronger signature for messages. DMARC tells receiving inboxes how to treat suspicious mail and can send reports back to the domain owner.

These records matter because your domain is part of your reputation. If your email authentication is missing or misconfigured, real messages can land in spam or fail checks. If it is set up well, it becomes harder for someone else to impersonate your domain.

## What is DMARC?

DMARC stands for Domain-based Message Authentication, Reporting, and Conformance.

That name is a mouthful, so think of DMARC as the email policy layer. It works with SPF and DKIM. It says, "If someone sends email that claims to be from this domain, and it does not pass the right checks, here is how inboxes should handle it."

Common DMARC policies include:

- `none`: watch and report, but do not tell inboxes to block anything.
- `quarantine`: suspicious messages may go to spam.
- `reject`: suspicious messages may be rejected.

Small businesses should not guess at strict DMARC settings. A responsible provider or technical partner should review who sends email for the business first, because newsletters, invoices, CRMs, and website forms may all send mail.

If your website forms, CRM, nurture emails, or follow-up tools are part of the problem, our [Marketing Automation](/services/marketing-automation) work is designed to help those systems talk to each other without making the business owner become the IT department.

## What is BIMI?

BIMI stands for Brand Indicators for Message Identification.

Plain English: BIMI can help show a brand logo beside authenticated emails in compatible inboxes. It is not the same thing as buying a domain, setting up email, or making a logo file. It sits on top of email authentication.

BIMI usually depends on things like:

- Proper SPF, DKIM, and DMARC alignment.
- A valid brand logo in the required format.
- Support from the mailbox provider.
- In some cases, extra brand verification requirements.

BIMI is best understood as an optional trust-and-brand layer. It can help, but it does not guarantee every inbox will show your logo.

## What should a business owner keep access to?

If your business depends on its website and email, make sure you know who controls the following.

| Access | Why It Matters |
| --- | --- |
| Registrar account | Controls the domain registration and renewal |
| Domain renewal settings | Prevents accidental expiration |
| Registrant contact email | Receives important domain notices |
| DNS access | Controls where the website and email point |
| Website hosting or platform access | Controls the actual website |
| Email admin access | Controls inboxes, aliases, routing, and authentication |
| Recovery email and phone | Helps regain access if someone leaves |
| Two-factor authentication | Protects the accounts that protect everything else |

Do not let one person's personal email be the only recovery path for the domain, DNS, website, or email system.

## When should you ask for help?

Ask the responsible provider or a technical partner before changing DNS if:

- Email suddenly stopped arriving.
- A website platform asks you to delete or replace records.
- A marketing tool gives you SPF, DKIM, DMARC, or CNAME records.
- You are changing registrars or nameservers.
- You are not sure which company currently hosts the website.
- You are not sure which company currently handles email.

The safest question to ask is:

> "Before we change this record, what service depends on it today?"

That one question can save a lot of pain.

## Quick glossary

**Domain:** The friendly name, like `mapleandmain.com`.

**URL:** The full address to a specific page, like `https://mapleandmain.com/catering`.

**Website:** The pages, images, content, code, forms, and design people interact with.

**Hosting:** The place or platform where the website runs.

**DNS:** The direction system that connects your domain to web, email, and other services.

**Registrar:** The company where the domain registration is managed.

**Nameservers:** The systems that answer DNS questions for your domain.

**MX:** The DNS record that controls where email is delivered.

**TXT:** A flexible DNS record often used for service verification and email trust.

**SPF:** A TXT record that lists approved email senders.

**DKIM:** An email signature system that helps prove message authenticity.

**DMARC:** An email policy and reporting system that works with SPF and DKIM.

**BIMI:** An optional email brand-logo standard that depends on strong authentication and provider support.

## The big takeaway

Your domain, website, URL, DNS, and email are connected, but they are different tools doing different jobs.

If you only remember one thing, remember this:

> Your domain is the name. DNS is the directions. Your website is the destination. Your email has its own route.

When those pieces are documented and the right accounts are protected, your business is much less likely to lose its website, miss email, or get stuck when it is time to change providers.

## Need help sorting this out?

If you are not sure who controls your domain, DNS, website, or business email, you do not have to figure it out alone.

TruMedia Creative can help you map out what you have, spot what is risky, and make a clear plan before anyone starts changing records or moving services. That might mean helping with a website rebuild, untangling access, checking email setup, or simply helping you understand what belongs where.

[Reach out to TruMedia Creative](/contact) and tell us what you are trying to fix. We will help you make sense of it.

## Sources and further reading

- [Cloudflare: What is a domain name?](https://www.cloudflare.com/learning/dns/glossary/what-is-a-domain-name/)
- [Cloudflare: What is DNS?](https://www.cloudflare.com/learning/dns/what-is-dns/)
- [Cloudflare: What is a DNS MX record?](https://www.cloudflare.com/learning/dns/dns-records/dns-mx-record/)
- [Cloudflare: What is a DNS SPF record?](https://www.cloudflare.com/learning/dns/dns-records/dns-spf-record/)
- [Cloudflare: What is a DNS DKIM record?](https://www.cloudflare.com/learning/dns/dns-records/dns-dkim-record/)
- [Cloudflare: What is a DNS DMARC record?](https://www.cloudflare.com/learning/dns/dns-records/dns-dmarc-record/)
- [BIMI Group: All about BIMI](https://bimigroup.org/all-about-bimi/)
