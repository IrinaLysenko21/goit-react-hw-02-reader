import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from '../Controls/Controls';
import Progress from '../Progress/Progress';
import Publication from '../Publication/Publication';

class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        text: PropTypes.string,
      }).isRequired,
    ).isRequired,
  };

  state = {
    publicationIndex: 0,
  };

  handlePrevClick = () => {
    this.setState(prevState => ({
      publicationIndex: prevState.publicationIndex - 1,
    }));
  };

  handleNextClick = () => {
    this.setState(prevState => ({
      publicationIndex: prevState.publicationIndex + 1,
    }));
  };

  render() {
    const { items } = this.props;
    const { publicationIndex } = this.state;
    const publication = items[publicationIndex];
    const prevBtnDisabled = publicationIndex < 1;
    const nextBtnDisabled = publicationIndex >= items.length - 1;

    return (
      <div>
        <Controls
          onPrevClick={this.handlePrevClick}
          onNextClick={this.handleNextClick}
          prevBtnDisabled={prevBtnDisabled}
          nextBtnDisabled={nextBtnDisabled}
        />
        <Progress
          currentPage={publicationIndex + 1}
          totalPages={items.length}
        />
        <Publication
          title={publication.title}
          text={publication.text}
          index={publicationIndex}
        />
      </div>
    );
  }
}

export default Reader;
