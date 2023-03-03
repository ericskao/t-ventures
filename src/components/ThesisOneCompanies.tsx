import { StaticImage } from 'gatsby-plugin-image';
import CollapsibleContent from './CollapsibleContent';

import './ThesisCompany.scss';

// using StaticImage which is loaded at build time and takes advantage of lazyloading
const ThesisOneCompanies = () => {
  return (
    <>
      <li className="company">
        <a href="https://www.looker.com/" target="_blank" className="company__logo-container">
          <StaticImage
            src="../images/companies/Looker.png"
            alt="looker-logo"
            placeholder="blurred"
            width={100}
            className="company__logo"
          />
        </a>
        <CollapsibleContent className="company__description">
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Magna eget est lorem ipsum. Sapien eget
              mi proin sed libero enim sed faucibus turpis. Tellus orci ac auctor augue mauris augue
              neque gravida in. Vel pharetra vel turpis nunc eget. Ultrices mi tempus imperdiet
              nulla malesuada pellentesque elit eget. Duis at tellus at urna condimentum mattis.
              Sagittis nisl rhoncus mattis rhoncus. Quisque sagittis purus sit amet volutpat
              consequat mauris. Id volutpat lacus laoreet non. Ultrices tincidunt arcu non sodales
              neque sodales. In nisl nisi scelerisque eu ultrices vitae auctor eu augue.
            </p>
            <p>
              Sollicitudin nibh sit amet commodo. Sapien nec sagittis aliquam malesuada bibendum
              arcu vitae elementum. Nulla porttitor massa id neque aliquam vestibulum morbi blandit.
              Cras tincidunt lobortis feugiat vivamus at. Feugiat sed lectus vestibulum mattis
              ullamcorper. Quam adipiscing vitae proin sagittis nisl rhoncus. Aliquet nec
              ullamcorper sit amet. Ac tincidunt vitae semper quis lectus nulla at volutpat. Elit
              eget gravida cum sociis natoque penatibus. Id semper risus in hendrerit gravida. Vel
              pretium lectus quam id. Elementum eu facilisis sed odio morbi quis commodo odio
              aenean.
            </p>
            <p>
              Sollicitudin tempor id eu nisl nunc mi. Ut consequat semper viverra nam libero justo
              laoreet. Quis lectus nulla at volutpat diam ut venenatis. Aliquam malesuada bibendum
              arcu vitae elementum curabitur. Donec et odio pellentesque diam. Elementum nibh tellus
              molestie nunc. Tincidunt augue interdum velit euismod in pellentesque massa placerat
              duis. Blandit massa enim nec dui nunc. Dictum varius duis at consectetur. Venenatis
              tellus in metus vulputate eu scelerisque felis. At tempor commodo ullamcorper a.
              Feugiat sed lectus vestibulum mattis ullamcorper. Egestas quis ipsum suspendisse
              ultrices gravida. Nullam ac tortor vitae purus faucibus ornare.
            </p>
            <p>
              Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod. Arcu odio ut
              sem nulla pharetra diam sit amet. Tristique magna sit amet purus gravida quis blandit.
              Enim sit amet venenatis urna cursus eget nunc scelerisque. Ac auctor augue mauris
              augue neque gravida. Ultricies tristique nulla aliquet enim. Vivamus arcu felis
              bibendum ut tristique et. Nec tincidunt praesent semper feugiat nibh sed pulvinar
              proin. At varius vel pharetra vel turpis nunc. Leo in vitae turpis massa sed elementum
              tempus egestas sed. Gravida in fermentum et sollicitudin ac. Purus non enim praesent
              elementum facilisis leo. Justo laoreet sit amet cursus sit amet. Pulvinar elementum
              integer enim neque volutpat ac tincidunt vitae semper. Vel orci porta non pulvinar
              neque laoreet suspendisse interdum consectetur.
            </p>
          </div>
        </CollapsibleContent>
      </li>
      <li className="company">
        <a href="https://hex.tech/" target="_blank" className="company__logo-container">
          <StaticImage
            src="../images/companies/HEX.png"
            alt="HEX-logo"
            placeholder="blurred"
            width={80}
            className="company__logo"
          />
        </a>
        <CollapsibleContent className="company__description">
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Magna eget est lorem ipsum. Sapien eget
              mi proin sed libero enim sed faucibus turpis. Tellus orci ac auctor augue mauris augue
              neque gravida in. Vel pharetra vel turpis nunc eget. Ultrices mi tempus imperdiet
              nulla malesuada pellentesque elit eget. Duis at tellus at urna condimentum mattis.
              Sagittis nisl rhoncus mattis rhoncus. Quisque sagittis purus sit amet volutpat
              consequat mauris. Id volutpat lacus laoreet non. Ultrices tincidunt arcu non sodales
              neque sodales. In nisl nisi scelerisque eu ultrices vitae auctor eu augue.
            </p>
            <p>
              Sollicitudin nibh sit amet commodo. Sapien nec sagittis aliquam malesuada bibendum
              arcu vitae elementum. Nulla porttitor massa id neque aliquam vestibulum morbi blandit.
              Cras tincidunt lobortis feugiat vivamus at. Feugiat sed lectus vestibulum mattis
              ullamcorper. Quam adipiscing vitae proin sagittis nisl rhoncus. Aliquet nec
              ullamcorper sit amet. Ac tincidunt vitae semper quis lectus nulla at volutpat. Elit
              eget gravida cum sociis natoque penatibus. Id semper risus in hendrerit gravida. Vel
              pretium lectus quam id. Elementum eu facilisis sed odio morbi quis commodo odio
              aenean.
            </p>
            <p>
              Sollicitudin tempor id eu nisl nunc mi. Ut consequat semper viverra nam libero justo
              laoreet. Quis lectus nulla at volutpat diam ut venenatis. Aliquam malesuada bibendum
              arcu vitae elementum curabitur. Donec et odio pellentesque diam. Elementum nibh tellus
              molestie nunc. Tincidunt augue interdum velit euismod in pellentesque massa placerat
              duis. Blandit massa enim nec dui nunc. Dictum varius duis at consectetur. Venenatis
              tellus in metus vulputate eu scelerisque felis. At tempor commodo ullamcorper a.
              Feugiat sed lectus vestibulum mattis ullamcorper. Egestas quis ipsum suspendisse
              ultrices gravida. Nullam ac tortor vitae purus faucibus ornare.
            </p>
            <p>
              Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod. Arcu odio ut
              sem nulla pharetra diam sit amet. Tristique magna sit amet purus gravida quis blandit.
              Enim sit amet venenatis urna cursus eget nunc scelerisque. Ac auctor augue mauris
              augue neque gravida. Ultricies tristique nulla aliquet enim. Vivamus arcu felis
              bibendum ut tristique et. Nec tincidunt praesent semper feugiat nibh sed pulvinar
              proin. At varius vel pharetra vel turpis nunc. Leo in vitae turpis massa sed elementum
              tempus egestas sed. Gravida in fermentum et sollicitudin ac. Purus non enim praesent
              elementum facilisis leo. Justo laoreet sit amet cursus sit amet. Pulvinar elementum
              integer enim neque volutpat ac tincidunt vitae semper. Vel orci porta non pulvinar
              neque laoreet suspendisse interdum consectetur.
            </p>
          </div>
        </CollapsibleContent>
      </li>
      <li className="company">
        <a href="https://www.dremio.com/" target="_blank" className="company__logo-container">
          <StaticImage
            src="../images/companies/dremio.png"
            alt="dremio-logo"
            placeholder="blurred"
            width={100}
            className="company__logo"
          />
        </a>
        <CollapsibleContent className="company__description">
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Magna eget est lorem ipsum. Sapien eget
              mi proin sed libero enim sed faucibus turpis. Tellus orci ac auctor augue mauris augue
              neque gravida in. Vel pharetra vel turpis nunc eget. Ultrices mi tempus imperdiet
              nulla malesuada pellentesque elit eget. Duis at tellus at urna condimentum mattis.
              Sagittis nisl rhoncus mattis rhoncus. Quisque sagittis purus sit amet volutpat
              consequat mauris. Id volutpat lacus laoreet non. Ultrices tincidunt arcu non sodales
              neque sodales. In nisl nisi scelerisque eu ultrices vitae auctor eu augue.
            </p>
            <p>
              Sollicitudin nibh sit amet commodo. Sapien nec sagittis aliquam malesuada bibendum
              arcu vitae elementum. Nulla porttitor massa id neque aliquam vestibulum morbi blandit.
              Cras tincidunt lobortis feugiat vivamus at. Feugiat sed lectus vestibulum mattis
              ullamcorper. Quam adipiscing vitae proin sagittis nisl rhoncus. Aliquet nec
              ullamcorper sit amet. Ac tincidunt vitae semper quis lectus nulla at volutpat. Elit
              eget gravida cum sociis natoque penatibus. Id semper risus in hendrerit gravida. Vel
              pretium lectus quam id. Elementum eu facilisis sed odio morbi quis commodo odio
              aenean.
            </p>
            <p>
              Sollicitudin tempor id eu nisl nunc mi. Ut consequat semper viverra nam libero justo
              laoreet. Quis lectus nulla at volutpat diam ut venenatis. Aliquam malesuada bibendum
              arcu vitae elementum curabitur. Donec et odio pellentesque diam. Elementum nibh tellus
              molestie nunc. Tincidunt augue interdum velit euismod in pellentesque massa placerat
              duis. Blandit massa enim nec dui nunc. Dictum varius duis at consectetur. Venenatis
              tellus in metus vulputate eu scelerisque felis. At tempor commodo ullamcorper a.
              Feugiat sed lectus vestibulum mattis ullamcorper. Egestas quis ipsum suspendisse
              ultrices gravida. Nullam ac tortor vitae purus faucibus ornare.
            </p>
            <p>
              Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod. Arcu odio ut
              sem nulla pharetra diam sit amet. Tristique magna sit amet purus gravida quis blandit.
              Enim sit amet venenatis urna cursus eget nunc scelerisque. Ac auctor augue mauris
              augue neque gravida. Ultricies tristique nulla aliquet enim. Vivamus arcu felis
              bibendum ut tristique et. Nec tincidunt praesent semper feugiat nibh sed pulvinar
              proin. At varius vel pharetra vel turpis nunc. Leo in vitae turpis massa sed elementum
              tempus egestas sed. Gravida in fermentum et sollicitudin ac. Purus non enim praesent
              elementum facilisis leo. Justo laoreet sit amet cursus sit amet. Pulvinar elementum
              integer enim neque volutpat ac tincidunt vitae semper. Vel orci porta non pulvinar
              neque laoreet suspendisse interdum consectetur.
            </p>
          </div>
        </CollapsibleContent>
      </li>
      <li className="company">
        <a href="https://www.exploreomni.com/" target="_blank" className="company__logo-container">
          <StaticImage
            src="../images/companies/omni.png"
            alt="omni-logo"
            placeholder="blurred"
            className="company__logo"
            width={100}
          />
        </a>
        <CollapsibleContent className="company__description">
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Magna eget est lorem ipsum. Sapien eget
              mi proin sed libero enim sed faucibus turpis. Tellus orci ac auctor augue mauris augue
              neque gravida in. Vel pharetra vel turpis nunc eget. Ultrices mi tempus imperdiet
              nulla malesuada pellentesque elit eget. Duis at tellus at urna condimentum mattis.
              Sagittis nisl rhoncus mattis rhoncus. Quisque sagittis purus sit amet volutpat
              consequat mauris. Id volutpat lacus laoreet non. Ultrices tincidunt arcu non sodales
              neque sodales. In nisl nisi scelerisque eu ultrices vitae auctor eu augue.
            </p>
            <p>
              Sollicitudin nibh sit amet commodo. Sapien nec sagittis aliquam malesuada bibendum
              arcu vitae elementum. Nulla porttitor massa id neque aliquam vestibulum morbi blandit.
              Cras tincidunt lobortis feugiat vivamus at. Feugiat sed lectus vestibulum mattis
              ullamcorper. Quam adipiscing vitae proin sagittis nisl rhoncus. Aliquet nec
              ullamcorper sit amet. Ac tincidunt vitae semper quis lectus nulla at volutpat. Elit
              eget gravida cum sociis natoque penatibus. Id semper risus in hendrerit gravida. Vel
              pretium lectus quam id. Elementum eu facilisis sed odio morbi quis commodo odio
              aenean.
            </p>
            <p>
              Sollicitudin tempor id eu nisl nunc mi. Ut consequat semper viverra nam libero justo
              laoreet. Quis lectus nulla at volutpat diam ut venenatis. Aliquam malesuada bibendum
              arcu vitae elementum curabitur. Donec et odio pellentesque diam. Elementum nibh tellus
              molestie nunc. Tincidunt augue interdum velit euismod in pellentesque massa placerat
              duis. Blandit massa enim nec dui nunc. Dictum varius duis at consectetur. Venenatis
              tellus in metus vulputate eu scelerisque felis. At tempor commodo ullamcorper a.
              Feugiat sed lectus vestibulum mattis ullamcorper. Egestas quis ipsum suspendisse
              ultrices gravida. Nullam ac tortor vitae purus faucibus ornare.
            </p>
            <p>
              Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod. Arcu odio ut
              sem nulla pharetra diam sit amet. Tristique magna sit amet purus gravida quis blandit.
              Enim sit amet venenatis urna cursus eget nunc scelerisque. Ac auctor augue mauris
              augue neque gravida. Ultricies tristique nulla aliquet enim. Vivamus arcu felis
              bibendum ut tristique et. Nec tincidunt praesent semper feugiat nibh sed pulvinar
              proin. At varius vel pharetra vel turpis nunc. Leo in vitae turpis massa sed elementum
              tempus egestas sed. Gravida in fermentum et sollicitudin ac. Purus non enim praesent
              elementum facilisis leo. Justo laoreet sit amet cursus sit amet. Pulvinar elementum
              integer enim neque volutpat ac tincidunt vitae semper. Vel orci porta non pulvinar
              neque laoreet suspendisse interdum consectetur.
            </p>
          </div>
        </CollapsibleContent>
      </li>
      <li className="company">
        <a href="https://motherduck.com/" target="_blank" className="company__logo-container">
          <StaticImage
            src="../images/companies/mother-duck.png"
            alt="mother-duck-logo"
            placeholder="blurred"
            width={150}
            className="company__logo"
          />
        </a>
        <CollapsibleContent className="company__description">
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Magna eget est lorem ipsum. Sapien eget
              mi proin sed libero enim sed faucibus turpis. Tellus orci ac auctor augue mauris augue
              neque gravida in. Vel pharetra vel turpis nunc eget. Ultrices mi tempus imperdiet
              nulla malesuada pellentesque elit eget. Duis at tellus at urna condimentum mattis.
              Sagittis nisl rhoncus mattis rhoncus. Quisque sagittis purus sit amet volutpat
              consequat mauris. Id volutpat lacus laoreet non. Ultrices tincidunt arcu non sodales
              neque sodales. In nisl nisi scelerisque eu ultrices vitae auctor eu augue.
            </p>
            <p>
              Sollicitudin nibh sit amet commodo. Sapien nec sagittis aliquam malesuada bibendum
              arcu vitae elementum. Nulla porttitor massa id neque aliquam vestibulum morbi blandit.
              Cras tincidunt lobortis feugiat vivamus at. Feugiat sed lectus vestibulum mattis
              ullamcorper. Quam adipiscing vitae proin sagittis nisl rhoncus. Aliquet nec
              ullamcorper sit amet. Ac tincidunt vitae semper quis lectus nulla at volutpat. Elit
              eget gravida cum sociis natoque penatibus. Id semper risus in hendrerit gravida. Vel
              pretium lectus quam id. Elementum eu facilisis sed odio morbi quis commodo odio
              aenean.
            </p>
            <p>
              Sollicitudin tempor id eu nisl nunc mi. Ut consequat semper viverra nam libero justo
              laoreet. Quis lectus nulla at volutpat diam ut venenatis. Aliquam malesuada bibendum
              arcu vitae elementum curabitur. Donec et odio pellentesque diam. Elementum nibh tellus
              molestie nunc. Tincidunt augue interdum velit euismod in pellentesque massa placerat
              duis. Blandit massa enim nec dui nunc. Dictum varius duis at consectetur. Venenatis
              tellus in metus vulputate eu scelerisque felis. At tempor commodo ullamcorper a.
              Feugiat sed lectus vestibulum mattis ullamcorper. Egestas quis ipsum suspendisse
              ultrices gravida. Nullam ac tortor vitae purus faucibus ornare.
            </p>
            <p>
              Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod. Arcu odio ut
              sem nulla pharetra diam sit amet. Tristique magna sit amet purus gravida quis blandit.
              Enim sit amet venenatis urna cursus eget nunc scelerisque. Ac auctor augue mauris
              augue neque gravida. Ultricies tristique nulla aliquet enim. Vivamus arcu felis
              bibendum ut tristique et. Nec tincidunt praesent semper feugiat nibh sed pulvinar
              proin. At varius vel pharetra vel turpis nunc. Leo in vitae turpis massa sed elementum
              tempus egestas sed. Gravida in fermentum et sollicitudin ac. Purus non enim praesent
              elementum facilisis leo. Justo laoreet sit amet cursus sit amet. Pulvinar elementum
              integer enim neque volutpat ac tincidunt vitae semper. Vel orci porta non pulvinar
              neque laoreet suspendisse interdum consectetur.
            </p>
          </div>
        </CollapsibleContent>
      </li>
      <li className="company">
        <a
          href="https://www.montecarlodata.com/"
          target="_blank"
          className="company__logo-container"
        >
          <StaticImage
            src="../images/companies/MonteCarlo.png"
            alt="monte-carlo-logo"
            placeholder="blurred"
            width={160}
            className="company__logo"
          />
        </a>
        <CollapsibleContent className="company__description">
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Magna eget est lorem ipsum. Sapien eget
              mi proin sed libero enim sed faucibus turpis. Tellus orci ac auctor augue mauris augue
              neque gravida in. Vel pharetra vel turpis nunc eget. Ultrices mi tempus imperdiet
              nulla malesuada pellentesque elit eget. Duis at tellus at urna condimentum mattis.
              Sagittis nisl rhoncus mattis rhoncus. Quisque sagittis purus sit amet volutpat
              consequat mauris. Id volutpat lacus laoreet non. Ultrices tincidunt arcu non sodales
              neque sodales. In nisl nisi scelerisque eu ultrices vitae auctor eu augue.
            </p>
            <p>
              Sollicitudin nibh sit amet commodo. Sapien nec sagittis aliquam malesuada bibendum
              arcu vitae elementum. Nulla porttitor massa id neque aliquam vestibulum morbi blandit.
              Cras tincidunt lobortis feugiat vivamus at. Feugiat sed lectus vestibulum mattis
              ullamcorper. Quam adipiscing vitae proin sagittis nisl rhoncus. Aliquet nec
              ullamcorper sit amet. Ac tincidunt vitae semper quis lectus nulla at volutpat. Elit
              eget gravida cum sociis natoque penatibus. Id semper risus in hendrerit gravida. Vel
              pretium lectus quam id. Elementum eu facilisis sed odio morbi quis commodo odio
              aenean.
            </p>
            <p>
              Sollicitudin tempor id eu nisl nunc mi. Ut consequat semper viverra nam libero justo
              laoreet. Quis lectus nulla at volutpat diam ut venenatis. Aliquam malesuada bibendum
              arcu vitae elementum curabitur. Donec et odio pellentesque diam. Elementum nibh tellus
              molestie nunc. Tincidunt augue interdum velit euismod in pellentesque massa placerat
              duis. Blandit massa enim nec dui nunc. Dictum varius duis at consectetur. Venenatis
              tellus in metus vulputate eu scelerisque felis. At tempor commodo ullamcorper a.
              Feugiat sed lectus vestibulum mattis ullamcorper. Egestas quis ipsum suspendisse
              ultrices gravida. Nullam ac tortor vitae purus faucibus ornare.
            </p>
            <p>
              Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod. Arcu odio ut
              sem nulla pharetra diam sit amet. Tristique magna sit amet purus gravida quis blandit.
              Enim sit amet venenatis urna cursus eget nunc scelerisque. Ac auctor augue mauris
              augue neque gravida. Ultricies tristique nulla aliquet enim. Vivamus arcu felis
              bibendum ut tristique et. Nec tincidunt praesent semper feugiat nibh sed pulvinar
              proin. At varius vel pharetra vel turpis nunc. Leo in vitae turpis massa sed elementum
              tempus egestas sed. Gravida in fermentum et sollicitudin ac. Purus non enim praesent
              elementum facilisis leo. Justo laoreet sit amet cursus sit amet. Pulvinar elementum
              integer enim neque volutpat ac tincidunt vitae semper. Vel orci porta non pulvinar
              neque laoreet suspendisse interdum consectetur.
            </p>
          </div>
        </CollapsibleContent>
      </li>
    </>
  );
};

export default ThesisOneCompanies;
