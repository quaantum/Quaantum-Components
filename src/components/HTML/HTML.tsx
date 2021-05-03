import React from 'react';
import styled from 'styled-components';
import { InternalProps, QuaantumProps } from '../../types';
import { Link } from 'react-router-dom';
import { internalProps } from '../../dictionary';

export type HTMLProps = InternalProps<QuaantumProps>;

const gen = <T extends HTMLProps>(props: T) =>
  props.genCss({
    ...props.componentCtx.base,
    ...props.componentCtx.variants?.[props.variant || props.componentCtx.defaultVariant],
    ...props,
  });

interface RawProps {
  styles: string;
}

const props = [([] as unknown) as TemplateStringsArray, (props) => props.styles] as const;

const hoc = (Component: React.FC<RawProps>): React.FC<HTMLProps> => (props) => {
  const styles = gen(props);
  const finalProps = {};

  for (const prop of Object.entries(props)) {
    if (!internalProps.includes(prop[0])) {
      finalProps[prop[0]] = prop[1];
    }
  }

  return <Component styles={styles} {...finalProps} />;
};

export const RawDiv = hoc(styled.div<RawProps>(...props));
export const RawMain = hoc(styled.main<RawProps>(...props));
export const RawArticle = hoc(styled.article<RawProps>(...props));
export const RawSection = hoc(styled.section<RawProps>(...props));
export const RawAside = hoc(styled.aside<RawProps>(...props));
export const RawForm = hoc(styled.form<RawProps>(...props));
export const RawHeader = hoc(styled.header<RawProps>(...props));
export const RawNav = hoc(styled.nav<RawProps>(...props));
export const RawFooter = hoc(styled.footer<RawProps>(...props));
export const RawH1 = hoc(styled.h1<RawProps>(...props));
export const RawH2 = hoc(styled.h2<RawProps>(...props));
export const RawH3 = hoc(styled.h3<RawProps>(...props));
export const RawH4 = hoc(styled.h4<RawProps>(...props));
export const RawH5 = hoc(styled.h5<RawProps>(...props));
export const RawH6 = hoc(styled.h6<RawProps>(...props));
export const RawInput = hoc(styled.input<RawProps>(...props));
export const RawTextarea = hoc(styled.textarea<RawProps>(...props));
export const RawButton = hoc(styled.button<RawProps>(...props));
export const RawP = hoc(styled.p<RawProps>(...props));
export const RawImage = hoc(styled.img<RawProps>(...props));
export const RawAnchor = hoc(styled.a<RawProps>(...props));
export const RawLink = hoc(styled(Link)<RawProps>(...props));
export const RawLi = hoc(styled.li<RawProps>(...props));
export const RawUl = hoc(styled.ul<RawProps>(...props));
export const RawOl = hoc(styled.ol<RawProps>(...props));
