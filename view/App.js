import Base from './Base.js'
import Header from '../components/Header.js'
import Sidebar from '../components/Sidebar.js'
import Chat from '../components/Chat.js'
import ContentWrapper from '../components/ContentWrapper.js'

export default {
    data() {},
    components: {
        Base,
        Header,
        Sidebar,
        Chat,
        ContentWrapper
    },
    template: `
      <Base>
        <Header></Header>
        <Sidebar></Sidebar>
        <Chat></Chat>
        <ContentWrapper></ContentWrapper>
      </Base>
      `,
  };
  