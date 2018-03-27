// @flow
import styled, { css } from 'styled-components';
import { Button } from 'src/components/buttons';
import { hexa, zIndex } from 'src/components/globals';

export const ContentContainer = styled.div`
  padding: 128px 32px 72px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 768px;
  z-index: ${zIndex.card};

  @media (max-width: 768px) {
    padding-top: 0;
    max-width: 100%;
    padding: 32px;
    padding-top: 64px;
  }
`;

export const Content = styled(ContentContainer)`
  position: relative;
`;

export const Heading = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: ${props =>
    props.reverse ? props.theme.text.reverse : props.theme.text.default};
  line-height: 1.2;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    margin-top: 48px;
    font-size: 32px;
  }
`;

export const Copy = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${props =>
    props.reverse ? props.theme.text.reverse : props.theme.text.secondary};
  line-height: 1.6;

  & + & {
    margin-top: 16px;
  }
`;

export const CTA = styled(Button)`
  font-weight: 700;
  margin-top: 24px;
  padding: 8px 16px;
  font-size: 16px;
  align-self: flex-start;
`;

export const TwoUp = styled(ContentContainer)`
  display: grid;
  max-width: 100%;
  padding: 128px 5% 48px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content;
  grid-template-areas: 'left right';
  grid-column-gap: 32px;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0;
    padding-top: 32px;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
    grid-template-areas: ${props =>
      props.reverse ? `'right' 'left'` : `'left' 'right'`};
    grid-row-gap: 32px;

    ${Heading}, ${Copy} {
      padding: 0px 32px;
    }

    ${props =>
      props.reverse &&
      css`
        & + .goop {
          display: none;
        }
      `};
  }
`;

export const FourUp = styled.div`
  display: grid;
  max-width: 100%;
  padding: 128px 5% 48px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content auto 1fr;
  grid-template-areas: 'copy copy' 'one two' 'three four';
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  align-items: stretch;
  justify-items: stretch;

  > div {
    min-width: 320px;
    margin: 0;
    justify-content: space-between;

    &:first-of-type {
      justify-self: center;
      margin: 0 32px;
    }
  }

  @media (max-width: 768px) {
    padding: 0;
    padding-top: 32px;
    grid-template-columns: 1fr;
    grid-template-rows: min-content min-content min-content min-content min-content;
    grid-template-areas: 'copy' 'one' 'two' 'three' 'four';
    grid-row-gap: 32px;
  }
`;

export const Left = styled.div`
  grid-area: left;
`;

export const Right = styled.div`
  grid-area: right;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 72px 0 0;
  width: 100%;
`;

export const Subsection = styled.div`
  & + & {
    margin-top: 32px;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${props => props.theme.text.primary};
  line-height: 1.3;
  margin-bottom: 16px;
`;

export const SectionSubtitle = styled.h4`
  font-size: 22px;
  font-weight: 600;
  color: ${props => props.theme.text.secondary};
  line-height: 1.4;
  margin: 16px 0;
`;

export const SectionDescription = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: ${props => props.theme.text.secondary};
  line-height: 1.4;

  & + & {
    margin-top: 16px;
  }

  a {
    color: ${props => props.theme.brand.alt};
    font-weight: 500;
  }
`;

export const Highlight = styled.span`
  box-shadow: inset 0 -28px 0 rgba(74, 2, 210, 0.1);
  font-weight: 600;
  padding: 4px 1px;
  line-height: 1.6;
`;

export const Divider = styled.div`
  height: 1px;
  background: ${props => props.theme.bg.border};
  width: calc(100% + 64px);
  display: inline-block;
  margin: 64px -32px 0px;

  @media (max-width: 832px) {
    width: 100%;
    margin: 64px 0 0;
  }
`;

export const CommunityListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  justify-content: center;
  margin: 48px -64px 0;
  width: calc(100% + 128px);

  @media (max-width: 896px) {
    width: 100%;
    margin: 48px 0 0;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CommunityCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 16px 16px;
  border-radius: 8px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.03), 0 2px 6px rgba(0, 0, 0, 0.06);
  background: ${props => props.theme.bg.default};
  align-items: center;
`;

export const CommunityCardAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 6px;
  display: inline-block;
  margin-bottom: 8px;
`;

export const CommunityCardName = styled.h6`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${props => props.theme.text.default};
`;

export const CommunityListActions = styled.div`
  display: flex;
  flex: auto;
  width: 100%;
  justify-content: space-between;

  a {
    display: inline-block;
  }

  a:first-of-type {
    flex: auto;
  }

  a:last-of-type {
    flex: none;
  }
`;

export const CommunityCardButton = styled.button`
  -webkit-display: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.text.alt};
  background: ${props => props.theme.bg.wash};
  transition: all 0.2s cubic-bezier(0.77, 0, 0.175, 1);
  width: 100%;

  &:hover {
    color: ${props => props.theme.text.default};
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.77, 0, 0.175, 1);
  }
`;

export const Illo = styled.img`
  position: absolute;
  right: ${props => (props.right ? `${props.right}px` : '0')};
  bottom: ${props => (props.bottom ? `${props.bottom}px` : '0')};
  width: ${props => (props.width ? `${props.width}px` : '200px')};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ExtraContent = styled.div`
  margin-top: 32px;
  padding-top: 8px;
  padding-bottom: 16px;
  border-top: 1px solid ${props => props.theme.bg.border};
`;

export const PriceTable = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  width: calc(100% + 256px);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    width: 100%;
    margin: 0;
  }
`;

export const PlanSection = styled.div`
  display: flex;
  justify-self: center;
  margin: auto;
  flex-direction: column;
  padding: 32px;
  box-shadow: 0 8px 32px ${props => hexa(props.theme.brand.alt, 0.25)};
  background-color: ${props => props.theme.bg.default};
  border-radius: 8px;
  max-width: 480px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 18px 24px;
    border-radius: 0;
    box-shadow: none;
  }
`;

export const PlanPrice = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${props => props.theme.text.default};
  margin-bottom: 8px;
`;

export const PlanDescription = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: ${props => props.theme.text.secondary};
  line-height: 1.3;
`;

export const BusinessPlanSection = styled.div`
  grid-column-start: span 2;
  display: flex;
  padding: 24px 32px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.03), 0 2px 6px rgba(0, 0, 0, 0.06);
  background: ${props => props.theme.bg.default};
  border-radius: 8px;

  @media (max-width: 1024px) {
    padding: 18px 24px;
    grid-column-start: 1;
    flex-direction: column;
  }
`;

export const BusinessPlanAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 24px;

  button {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    margin-top: 16px;
    padding-left: 0;

    a {
      width: 100%;
    }
  }
`;

export const BusinessPlanContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PlanFeatures = styled.ul`
  list-style-type: none;
  margin-top: 16px;
  padding: 0;
`;

export const FeaturePrice = styled.span`
  grid-area: price;
  padding: 6px 8px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  margin-left: 8px;
  letter-spacing: -0.2px;
  color: ${props =>
    props.color
      ? props.theme[props.color].default
      : props.theme.success.default};
  background: ${props =>
    props.color
      ? hexa(props.theme[props.color].default, 0.08)
      : hexa(props.theme.success.default, 0.08)};
`;

export const FeatureWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: min-content;
  grid-template-areas: 'icon title price' '. description description';
  color: ${props => props.theme[props.color].default};
  padding: 16px 0;
  align-items: center;
  grid-column-gap: 16px;
  border-bottom: 1px solid ${props => props.theme.bg.border};

  &:last-of-type {
    border-bottom: 0;
    padding-bottom: 0;
  }

  .icon {
    grid-area: icon;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FeatureTitle = styled.p`
  grid-area: title;
  font-size: 17px;
  font-weight: 500;
  line-height: 1.2;
  margin-top: -1px;
  color: ${props => props.theme.text.secondary};
`;

export const FeatureDescription = styled.p`
  grid-area: description;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: ${props => props.theme.text.alt};
  padding-right: 24px;
  margin-top: 8px;
`;

export const SampleCommunitiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 90%;

  a {
    display: inline-block;
    margin-right: 16px;
  }
`;
