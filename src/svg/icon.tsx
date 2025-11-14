import {
  IconAdvanced,
  IconArcade,
  IconCheck,
  IconPro,
  Sidebar,
  SidebarMobile,
  IconThankYou,
} from '.';

const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case 'advanced':
      return <IconAdvanced />;
    case 'arcade':
      return <IconArcade />;
    case 'check':
      return <IconCheck />;
    case 'pro':
      return <IconPro />;
    case 'sidebar':
      return <Sidebar />;
    case 'sidebar-mobile':
      return <SidebarMobile />;
    case 'thank-you':
      return <IconThankYou />;
    default:
      return null;
  }
};

export default Icon;
