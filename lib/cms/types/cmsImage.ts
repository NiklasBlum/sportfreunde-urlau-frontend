export type CmsImage = {
  _key: string;
  asset: { _ref: string; _type: "reference" };
  alt: string | null;
  dimensions: { width: number; height: number } | null;
};
