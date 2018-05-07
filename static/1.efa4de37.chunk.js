webpackJsonp([1],{552:function(n,e,t){var o=t(9),l=t(32),s=t(59).PageRenderer;s.__esModule&&(s=s.default);var u=l({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(556)}},componentWillMount:function(){},render:function(){return o.createElement(s,Object.assign({},this.props,{content:this.state.content}))}});u.__catalog_loader__=!0,n.exports=u},556:function(n,e){n.exports='### Container, Row & Columns\n\nA number of different column widths & combinations can be used to create layouts.\n\nBy default columns are 100% width which is the equivalent of 12/12\n\n```react\nresponsive: true\n---\n<Container>\n    <Row>\n        <Column><p style={contentStyles}>Default Column</p></Column>\n    </Row>\n</Container>\n```\n\n### Props\n\n```table\nspan: 6\nrows:\n  - Prop: small\n    Type: number\n    Default: 12\n    Notes: Sets the base size for columns\n  - Prop: medium\n    Type: number\n    Default:\n    Notes: When not provided `small` is used instead\n  - Prop: large\n    Type: number\n    Default:\n    Notes: When not provided `medium` is used instead then `small`\n  - Prop: xLarge\n    Type: number\n    Default:\n    Notes: When not provided `large` is used instead then `medium`, etc...\n```\n\n### Layout Examples\n\n```react\nresponsive: true\n---\n<div>\n    <Container style={{ paddingBottom: "20px" }}>\n        <Row>\n            <Column small={12} medium={6}><p style={contentStyles}>One</p></Column>\n            <Column small={12} medium={6}><p style={contentStyles}>Two</p></Column>\n        </Row>\n    </Container>\n\n    <Container style={{ paddingBottom: "20px" }}>\n        <Row>\n            <Column small={2}><p style={contentStyles}>One</p></Column>\n            <Column small={4}><p style={contentStyles}>Two</p></Column>\n            <Column small={2}><p style={contentStyles}>Three</p></Column>\n            <Column small={4}><p style={contentStyles}>Four</p></Column>\n        </Row>\n    </Container>\n\n    <Container style={{ paddingBottom: "20px" }}>\n        <Row>\n            <Column medium={5}><p style={contentStyles}>One</p></Column>\n            <Column medium={2}><p style={contentStyles}>Two</p></Column>\n            <Column medium={2}><p style={contentStyles}>Three</p></Column>\n            <Column medium={2}><p style={contentStyles}>Four</p></Column>\n            <Column medium={1}><p style={contentStyles}>Five</p></Column>\n        </Row>\n    </Container>\n</div>\n```\n\n```hint\nIn order to achieve the correct gutter size `Container`, `Row`, `Colum` should be used together\n```\n'}});
//# sourceMappingURL=1.efa4de37.chunk.js.map