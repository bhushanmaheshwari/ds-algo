/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class Index extends React.Component {
  render() {
    const { config: siteConfig } = this.props;
    const { baseUrl } = siteConfig;

    const Block = (props) => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const ProjectTitle = (props) => (
      <GridBlock
        align="center">

        <h2 className="projectTitle">

          <small>{props.tagline}</small>
        </h2>
      </GridBlock>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content: siteConfig.tagline,
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'right',
            title: 'Data Structure & Algorithms',
          },
        ]}
      </Block>
    );




    return (
      <div>
        <div className="mainContainer">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <TryOut />
        </div>
      </div>
    );
  }
}

module.exports = Index;
