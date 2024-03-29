import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hello, I’m Kris" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Web Developer and California Kid currently based in 📍 Rocklin, CA via Sacramento,
      Los Angeles, and San Francisco. Alumni of the University of California, Irvine and
      App Academy. Welcome to my portfolio.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      My journey to becoming a software engineer, begins with my experience in tech sales
      and photography, both which have uniquely shaped my approach to programming and
      design. As a result, has allowed me to view software development through an unique
      lens.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Fusing customer-focused thinking from my sales background with the attention to
      detail and creative eye of a photographer, My portfolio is a testament to my journey
      - where practical solutions meet innovative design, and functionality meets user
      experience.
    </Text>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
      To me, web development is not just about code, 1s, and 0s. I create more than
      software applications - I craft experiences. Each project is a blend of
      functionality, aesthetics, and user flow. At the end of the day, it’s all about
      creating something that makes sense, looks good, and feels right. If you’re
      interested in the technology and software I use, check out my{' '}
      <Link href="/uses">uses page</Link>
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      A lifelong learner at heart, I value spending quality time with my family, friends,
      and my dog/son Biggi. My hobbies include surfing, basketball, boxing, bowling, and
      going to Sacramento Kings games with family. I am intrigued by creation, design,
      photography, traveling, internal growth, delicious food, and even better
      conversations. I am seeking to be inspired, envision the unlikely, and surround
      myself with those who bring out the best out of me.
    </Text>
    {/* <Text className={styles.description} data-visible={visible} size="l" as="p">
      I am currently looking for work, so if you like what you see, please send me a
      message. Together, let’s build something memorable.
    </Text> */}
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a Message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Best Man Duties"
                />
                <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                >
                  <use href={`${profileKatakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
