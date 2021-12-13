import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

// components
import App from "../App";
import { Player } from "../components/Player";
import { Socials } from "../components/Socials";
import { Switch } from "../components/Switch";
import { Bruh } from "../components/Bruh";

// set up enzyme
Enzyme.configure({ adapter: new Adapter() });

test("Renders all the components", () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find(Bruh)).toHaveLength(1);
  expect(wrapper.find(Player)).toHaveLength(1);
  expect(wrapper.find(Socials)).toHaveLength(1);
  expect(wrapper.find(Switch)).toHaveLength(1);
});
