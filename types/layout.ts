import { PostType } from './post';

export interface MetaProps
  extends Pick<PostType, 'chapter' | 'description' | 'title'> {
  /**
   * For the meta tag `og:type`
   */
  type?: string;
}
