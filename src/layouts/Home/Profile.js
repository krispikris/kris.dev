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
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I am Kris, currently living in Sacramento, CA. Welcome to my portfolio. My journey
      to becoming a software engineer starts with my experience in tech sales and
      photography, which both have uniquely shaped my approach to programming and design.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Fusing customer-focused thinking from my sales background with the attention to
      detail and creative eye of a photographer, I view software development through a
      unique lens. My portfolio is a testament to my journey - where practical solutions
      meet innovative design, and functionality meets user experience.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Web development is not just about coding, for me. Programming is about creating
      experiences. Similar to a camera in photography, every angle, every shot, matters. I
      bring that same eye for detail and beauty to designing digital spaces.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      To me, at the end of the day, it’s all abount creating something that makes sense,
      looks good, and feels right. If you’re interested in the technology and software I
      use, check out my <Link href="/uses">uses page</Link>
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      A lifelong learner at heart, I value spending quality time with my family, friends,
      and my dog/son Biggi. My hobbies include surfing, basketball, boxing, and going to
      Sacramento Kings games. I am currently looking for work, so if you like what you
      see, please send me a message. Together we can build and create something great.
    </Text>
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
                  alt="Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan"
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
