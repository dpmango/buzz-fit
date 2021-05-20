import React, { useMemo } from 'react';
import cns from 'classnames';

import { TermsContent, PageTop } from '@components/Static/particles';
import content from './data';

const Privacy = ({ ...props }) => {
  return (
    <section className="terms">
      <PageTop title={content.title} image={content.image} />

      <TermsContent rows={content.rows} />
    </section>
  );
};

export default Privacy;
