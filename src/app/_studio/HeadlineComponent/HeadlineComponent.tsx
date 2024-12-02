import styles from "./HeadlineComponent.module.css";

type HeadlineProps = {
  headline: string;
  paragraph: string;
};


export function HeadlineComponent({
  headline,
  paragraph,
  ...props
}: HeadlineProps) {

  return (
    <div className={styles.headline} {...props}>
      <h2>{headline}</h2>
      <p>{paragraph}</p>
    </div>
  );
}
