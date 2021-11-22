import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
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
            {'A fresh new approach for\n'}
            <span className="text-logo-blue">Advertisements in Web 3</span>
          </>
        }
        description="The easiest way to manage advertisements for everyone."
        button={
          <Link href="/assets/doc/LitepaperAdMeta.pdf">
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
