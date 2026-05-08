export interface CmsRichTextBlock {
  _type: string;
  _key?: string;
  [key: string]: unknown;
}

export type CmsRichText = CmsRichTextBlock[];
