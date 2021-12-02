import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-300">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        {/* <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li> */}
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <span className="text-logo-blue">A privacy-preserving Ad Platform for</span>
            <span className="text-logo-cyan"> Metaverse </span>
          </>
        }
        description="Customized ads service without revealing users privacy"
        button={
          <Link href="/assets/doc/Litepaper.pdf">
            <a>
              <Button xl>AdMeta Whitepaper</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
