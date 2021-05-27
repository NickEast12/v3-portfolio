import React from 'react';
import styled from 'styled-components';
import { Gradient } from 'react-gradient';

//* Local imports
import Layout from '../components/Layout';

const UsesStyles = styled.section`
  width: 100%;
  .uses {
    width: 90%;
    margin: 0 auto;
    padding: 2rem 0;
    max-width: var(--maxWidth);
    p {
      font-size: 1.25rem;
      margin-bottom: 1rem;
      span {
        color: var(--mainColour);
        font-weight: 700;
      }
    }
    @media only screen and (min-width: 768px) {
      padding: 4rem 0;
    }
    &__wrapper {
      margin-top: 2rem;
      h3 {
        font-weight: 800;
        letter-spacing: -0.1px;
      }
      ul {
        margin-top: 0.5rem;
        list-style: square;
        width: 85%;
        margin: 0.5rem auto;
        li {
          margin-bottom: 0.5rem;
          line-height: 1.5;
          transition: color 0.15s ease;
          span {
            font-weight: 700;
          }
          &:nth-child(1) {
            span {
              color: #4e94fb;
            }
          }

          &:hover {
            color: var(--mainColour);
          }
          a {
            span {
            }
          }
        }
      }
    }
  }
`;
const Uses = () => {
  const i = true;
  return (
    <Layout>
      <UsesHeader />
      <UsesStyles>
        <div className="uses">
          <p>
            Last updated: <span>May 2021</span>
          </p>
          <p>
            Thought I'd jump on the bandwagon and tell everyone what tech I'm
            currently using!
          </p>
          <div className="uses__wrapper">
            <h3>Hardware</h3>
            <ul>
              <li>
                <a
                  href="https://www.apple.com/uk/macbook-pro-13/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apple Macbook Pro 13" (2 GHz i5, 16gb RAM, )
                </a>
              </li>
              <li>
                <a
                  href="https://www.duckychannel.com.tw/en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ducky One2 (Mechanical keyboard)
                </a>
              </li>
              <li>
                <a
                  href="https://www.apple.com/uk/shop/product/MJ2R2Z/A/magic-trackpad-2-silver"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apple Magic trackpad 2
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.co.uk/Aluminum-Removable-Ventilated-Notebook-Compatible-Grey/dp/B07P6X63SD/ref=sr_1_1_sspa?adgrpid=61995159269&dchild=1&gclid=Cj0KCQjwhr2FBhDbARIsACjwLo2rzBk6liH3bQNk8-2CqUI21EhmL0ED7nV_rA4eLbqi3ioMjDx9kWMaAvK4EALw_wcB&hvadid=314247098103&hvdev=c&hvlocphy=1006779&hvnetw=g&hvqmt=e&hvrand=9877384250642794839&hvtargid=kwd-484489107000&hydadcr=20048_1747402&keywords=nulaxy+laptop+stand&qid=1622135038&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExWDM2WTVMTEtISVk1JmVuY3J5cHRlZElkPUEwMTMwNDA5MklBU00wSk44Q1c0UiZlbmNyeXB0ZWRBZElkPUEwMzc1MjUzMlpTQkpZVTdNN0JSUiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nulaxy laptop stand
                </a>
              </li>
              <li>
                <a
                  href="https://www.overclockers.co.uk/aoc-cu34g2x-bk-34-3440x1440-va-144hz-1ms-freesync-curved-widescreen-led-backlit-gaming-monitor-mo-059-ao.html?gclid=Cj0KCQjwhr2FBhDbARIsACjwLo0o3aEXnXnP0RiqOEm_eubWWmVjJfTTXUL2eOvbpCE3QK_ajhTTWC8aAjroEALw_wcB&__cf_chl_jschl_tk__=81e952c91891cfae13cf53f1b0e4196ae6abff60-1622134203-0-Acs7RV5aIUr7Ruu6O3qp6Wk33OicF5-2V-b1baSsv_kItO5IT26Q6WMVa1A2Queh89oi2voVGDE3M9XJ54bowe7vtPBd2u6ZVXBIyIc-m3kSu87LfYqZ22nRANoPer1Cl2jVYwcZlgJ2hgo5Ca_lDDEQRB2xOjPui7MacHRCpR-0d6lcR13dPfrOGrdJ_zA8EeqsTEq1IE6ltgPzlJ8KcPqEOnlMDTXlwY0agXMm-BkEh9hhKcSo4T6zi28IbybUOEHbWDrpC9IpYbgTcbZtP0kqJNNkmi4WsuB078eBwa-fc5E4DJB_kkNnpDmgHHAsH5a9qtz_xvN1NDoUjCQhCoXaIgirFxLQhXc_WJ6kt8YT9PDIof9vHbLe69-IjcT7izPvf3TWBPkAqifediGF_JNtfDb9a3G5e-SXTMwjCzifq93OpItZnH74nDhSyCuFMzKlhpAwDFwmEaSDjNOCSGHbO2eXerO646pLxTX3nLidzM6_ij7kaKlXFs4HCl3rGdEz9JyrUEyTNMLgIwZr40_nP0Dlzl7CLioS9YFz8eM9m9Ei1gA53uskNMDAbHx3tltdfgrV1r-H08_ikukcI8KRK3H8uy1bAl7FNklTjCPNc1E7GMJKCPeAsqJeAXxO9KGxlpVo-cMWdLUpnhiTWK_T3gge3CDA24jtoGkYm4N4fH_-y_wcSWaTVvvntZ9MnqSVZrreOfwZWGAUDpatuAnrdtOuq9Xk_AIhFfSIj6js"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AOC CU34G2X 34" 3440x1440 144hx ultra-wide monitor
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.co.uk/Dell-Ultrasharp-U2414h-Monitor-Fullhd/dp/B00GTV05XG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dell U2414H secondary monitor
                </a>
              </li>
            </ul>
          </div>
          <div className="uses__wrapper">
            <h3>Software</h3>
            <ul>
              <li>
                VS Code with the{' '}
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Halcyon theme </span>{' '}
                </a>
                by{' '}
                <a
                  href="https://github.com/bchiang7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Brittany Chiang</span>
                </a>
              </li>
              <li>Hyper terminal</li>
              <li>Git for version control</li>
              <li>Sketch + Illustrator</li>
            </ul>
          </div>
        </div>
      </UsesStyles>
    </Layout>
  );
};

export default Uses;

const UsesHeaderStyles = styled.header`
  width: 100%;
  position: relative;
  .uh {
    padding: 7rem 0;
    text-align: center;
    position: relative;
    z-index: 5;
    h1 {
      color: #fff;
      font-weight: 700;
    }
  }
  .bkg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
const UsesHeader = () => {
  const gradients = [
    ['#16222A', '#3A6073'],
    ['#0A1A2E', '#093637'],
    ['#4e94fb', '#69ffb7'],
  ];
  return (
    <UsesHeaderStyles>
      <div className="uh">
        <h1>Uses</h1>
      </div>
      <Gradient
        gradients={gradients} // required
        property="background"
        duration={5000}
        angle="150deg"
        className="bkg"
      />
    </UsesHeaderStyles>
  );
};
