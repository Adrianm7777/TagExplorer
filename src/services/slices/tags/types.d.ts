interface TagData {
  name: string;
  count: number;
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  synonyms?: string[];
  collectives?: Collective[];
  last_activity_date?: number;
  user_id?: number;
}

interface TagsDataResponse {
  items: TagData[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
  total: number;
}

interface Collective {
  description: string;
  external_links: collective_external_links[];
  link: string;
  names: string;
  slug: string;
  tags: string[];
}

interface CollectiveExternalLinks {
  link: string;
  type: LinkType[];
}

enum LinkType {
  Website = "website",
  Twitter = "twitter",
  GitHub = "github",
  Facebook = "facebook",
  Instagram = "instagram",
  Support = "support",
  LinkedIn = "linkedin",
}
