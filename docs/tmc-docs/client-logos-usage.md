# Client Logos Content Collection Usage

## Overview

Client logos are now managed through a content collection in `content/client-logos.yml`. This allows for easy management of client logos with support for links and enabling/disabling individual logos.

## Features

- **Content-driven**: Logos are managed in a YAML file, not hardcoded in the component
- **Links**: Add optional URLs to make logos clickable
- **Enable/Disable**: Toggle logos on/off without removing them from the list
- **Type-safe**: Schema validation ensures data integrity

## Editing Client Logos

### File Location

`content/client-logos.yml`

### Schema

Each logo has the following properties:

- `name` (required): Display name of the client
- `logo` (required): Path to the logo image file
- `alt` (required): Alt text for accessibility
- `link` (optional): URL to the client's website (opens in new tab)
- `enabled` (optional): Boolean to show/hide the logo (defaults to `true`)

### Examples

#### Basic Logo (No Link)

```yaml
- name: Chick-fil-A
  logo: /images/clients/chickfila.png
  alt: Chick-fil-A
  enabled: true
```

#### Logo with Link

```yaml
- name: Amazon
  logo: /images/clients/amazon.png
  alt: Amazon
  link: https://www.amazon.com
  enabled: true
```

#### Disabled Logo

```yaml
- name: AutoDrill
  logo: /images/clients/autodrill.png
  alt: AutoDrill
  enabled: false
```

## Adding a New Logo

1. Add the logo image to `/public/images/clients/`
2. Add a new entry to `content/client-logos.yml`:

```yaml
- name: New Client
  logo: /images/clients/new-client.png
  alt: New Client Company Name
  link: https://www.newclient.com # Optional
  enabled: true
```

## Disabling a Logo

To temporarily hide a logo without deleting it, set `enabled: false`:

```yaml
- name: Client Name
  logo: /images/clients/client.png
  alt: Client Name
  enabled: false
```

## Changing the Title

The title displayed above the logos can be changed by editing the `title` field at the top of `content/client-logos.yml`:

```yaml
title: Who We've Partnered with and Served
```

## Technical Implementation

- **Schema**: Defined in `content.config.ts` using `createClientLogoSchema()`
- **Collection**: `clientlogos` collection
- **Component**: `app/components/ClientLogos.vue`
- **Query**: Uses `queryCollection("clientlogos").first()` to fetch data
- **Filtering**: Only logos with `enabled !== false` are displayed
