import Container from '@components/atoms/container/Container';
import { Heading, TextBody } from '@components/atoms/text/TextFactory';
import Text from '@components/atoms/text/Text';
import Button from '@components/atoms/button/Button';
import type { ReactNode } from 'react';
import backgroundImage from '@assets/images/hero-background.webp';
import { getLandingKeyframes } from '@/utils';

function HeroSection({ id }: { id?: string }) {
  return (
    <section id={id}>
      <HeroContainer>
        <Container size="full-width" maxWidth="1210px" justify="center">
          <Container direction="column" align="center">
            <HeroText />
          </Container>
        </Container>
      </HeroContainer>
    </section>
  );
}

function HeroContainer({ children }: { children: ReactNode }) {
  return (
    <Container
      size={{ width: '100%', height: '600px' }}
      cssx={{
        backgroundSize: 'cover',
        backgroundImage: `url(${backgroundImage})`,
        sm: {
          height: '800px',
        },
      }}
      justify="center"
      align="center">
      {children}
    </Container>
  );
}

function HeroText() {
  return (
    <>
      <Heading.XSmall
        cssx={{
          opacity: 0,
          animation: `${getLandingKeyframes(true)} 0.5s ease-in-out forwards 1s`,
        }}
      >
        부산대학교 대표 IT 프로젝트 동아리
      </Heading.XSmall>
      <Text
        defaultSize="60px"
        weight="bold"
        responsiveSize={{
          sm: '100px',
        }}
        cssx={{
          opacity: 0,
          animation: `${getLandingKeyframes(true)} 0.5s ease-in-out forwards 0.5s`,
        }}
      >
        APPTIVE
      </Text>
      <Button
        variant="light-outlined"
        cssx={{
          marginTop: '15px',
          opacity: 0,
          animation: `${getLandingKeyframes()} 0.5s ease-in-out forwards 1s`,
        }}
      >
        <TextBody.Large weight="bold">
          22기 모집 링크 바로가기
        </TextBody.Large>
      </Button>
    </>
  );
}

export default HeroSection;
