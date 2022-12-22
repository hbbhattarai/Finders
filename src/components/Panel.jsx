import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { chapters } from '../config/options';
import logo from '../../data/assets/logo.png';
import precip from '../../data/assets/precip.png';

export default class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }

  setActiveChapter = (newChapter) => {
    const { chapterName, updateChapter } = this.props;

    if (newChapter === chapterName) return;

    document.getElementById(newChapter).setAttribute('class', 'active');
    document.getElementById(chapterName).setAttribute('class', '');

    updateChapter(newChapter);
  }

  isElementOnScreen = (id) => {
    const element = document.getElementById(id);
    const bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
  }

  handleScroll = (e) => {
    const chapterNames = Object.keys(chapters);
    let i;

    for (i = 0; i < chapterNames.length; i += 1) {
      const chapterName = chapterNames[i];
      if (this.isElementOnScreen(chapterName)) {
        this.setActiveChapter(chapterName);
        break;
      }
    }
  }


  render() {
    return (
      <div id="features" onScroll={this.handleScroll}>
        <section id="gelephu" className="active">
          <Typography variant="h3">Gelephu Thromde</Typography>
          <Typography>
            Gelephu is located at about 30 kms to the east of Sarpang, the Dzongkhag Headquarters.
            Though, Sarpang is the administrative centre for the Dzongkhag, Gelephu, due to various factors, has prospered and developed as a market town serving the hinterland.
            The geographical setting of the town with relatively flat terrain, close proximity and well established connectivity with India,
            and its location as a nodal connection for the central parts of Bhutan,
            <span class="highlight">makes the place one of the preferred locations for future development</span>.
          </Typography>
          <br></br>
          <img class="figure" src={logo} alt="Thromde Logo"></img>
          <br></br>
          <Typography variant="h6">CLIMATE &amp; ANNUAL PRECIPITATION</Typography>
          <Typography>
            Like other southern belt of the country at the foothills of the Himalayas has a <span class="highlight">subtropical climate</span> with high humidity, heavy rainfall, and average temperatures of approximately 15°C-30°C year-round.with average temperatures from <span class="highlight"> 20 &deg;C to 34 &deg;C </span> .
          </Typography>
          <br></br>
          <img class="figure" src={precip} alt="Average Temperature & precipitation"></img>
        </section>
        <section id="land">
          <Typography variant="h3">Central Regional Referral Hospital</Typography>
          <Typography>
            One of the 3 Tertiary Care Hospitals of Bhutan, CRRH Gelephu caters to the people of <span class="highlight">6 Central Districts</span>.
          </Typography>
          <br></br>
          <Typography variant="h6">STRUCTURES</Typography>
          <Typography>
          Different types of building uses were also recorded during the enumeration. The statistics show that 7,107 structures are being used for residential purposes followed by mixed use with 1385 structures and commercial uses with 449 structures. Other uses include Institutions with 336 structures, schools with 240 structures, and religious uses with 218 structures.The “Others category” include structures like gates, canopies, and garages while unknown uses include labor camps and structures whose uses were not recorded during the enumeration..
          </Typography>
          <br></br>
          <img class="figure" src={logo} alt="Distribution of buildings"></img>
        </section>
      </div>
    );
  }
}

Panel.propTypes = {
  chapterName: PropTypes.string.isRequired,
  updateChapter: PropTypes.func.isRequired,
};
