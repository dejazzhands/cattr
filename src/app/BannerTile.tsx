import Banner, { BannerProps } from "./Banner";

export default function BannerTile(props: BannerProps) {
  const { title, image, tags, description } = props;
  return (
    <Banner image={image}>
      <Banner.Title title={title} />
      <Banner.Tags tags={tags} />
      <Banner.Description description={description} />
    </Banner>
  );
}
