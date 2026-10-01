import { AppMark } from '@/components/brand/AppMark';
import { Card, Well } from '@/components/ui/card';
import { APP_NAME } from '@/lib/brand';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import iconMaster from '../../../design/brand/app-icon.png';
import iconDark from '../../../design/brand/app-icon-dark.png';
import iconLight from '../../../design/brand/app-icon-light.png';
import banner from '../../../design/brand/app-banner.jpg';
import pattern from '../../../design/brand/app-pattern.svg';
import { PageHeader, Section } from './DesignSection';

const SIZES = [256, 128, 64, 48, 32, 16];

// Unsplash 라이선스 표기 요건: 작가·Unsplash 링크를 배너와 함께 노출한다.
const BANNER_CREDIT_LINKS: Record<string, { href: string; label: string }> = {
  '{author}': {
    href: 'https://unsplash.com/@molnj?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    label: 'Jocelyn Morales',
  },
  '{source}': {
    href: 'https://unsplash.com/photos/GA6WtJ7DtSo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    label: 'Unsplash',
  },
};

export function BrandPage() {
  const { t } = useLanguage();
  const variants = [
    { src: iconMaster, labelKey: 'design.brand.variantMaster' },
    { src: iconDark, labelKey: 'design.brand.variantDark' },
    { src: iconLight, labelKey: 'design.brand.variantLight' },
  ];

  return (
    <>
      <PageHeader
        badge={t('design.nav.brand')}
        title={t('design.brand.title')}
        lead={t('design.brand.lead')}
      />

      <Section label={t('design.brand.sizes')}>
        <Well className="flex flex-wrap items-end gap-8">
          {SIZES.map((size) => (
            <figure key={size} className="flex flex-col items-center gap-2">
              <img src={iconMaster} width={size} height={size} alt="" />
              <figcaption className="font-mono text-xs text-muted-foreground">
                {size}px
              </figcaption>
            </figure>
          ))}
        </Well>
        <p className="text-xs text-muted-foreground">
          {t('design.brand.sizesHint')}
        </p>
      </Section>

      <Section label={t('design.brand.variants')}>
        <div className="grid grid-cols-3 gap-4">
          {variants.map(({ src, labelKey }) => (
            <Card key={labelKey} className="flex flex-col items-center gap-4">
              <img src={src} width={140} height={140} alt="" />
              <p className="text-xs text-muted-foreground">{t(labelKey)}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section label={t('design.brand.mark')}>
        <Card className="flex flex-wrap items-center gap-10">
          <AppMark className="h-24 w-24" />
          <AppMark className="h-12 w-12" />
          <AppMark compact className="h-6 w-6" />
          <span className="flex items-center gap-2 text-foreground">
            <AppMark className="h-7 w-7" />
            <strong className="text-lg tracking-tight">{APP_NAME}</strong>
          </span>
        </Card>
      </Section>

      <Section label={t('design.brand.banner')}>
        <figure className="flex flex-col gap-2">
          <img src={banner} alt="" className="w-full rounded-card" />
          <figcaption className="text-right text-xs text-muted-foreground">
            {t('design.brand.bannerCredit')
              .split(/(\{author\}|\{source\})/)
              .map((part, i) => {
                const link = BANNER_CREDIT_LINKS[part];
                return link ? (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ) : (
                  part
                );
              })}
          </figcaption>
        </figure>
        <div className="grid grid-cols-2 gap-4">
          <img src={pattern} alt="" className="w-full rounded-card" />
          <Card className="flex items-center">
            <p className="text-sm text-muted-foreground">
              {t('design.brand.patternHint')}
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
}

export default BrandPage;
