import React from "react";
import { bindActionCreators } from 'redux';
import IndustryMain from './../../components/organization/IndustryMain';
import { connect } from "react-redux";
import { addOrganization } from './../../actions/organization'

const mapStateToProps = state => {
  return {
    organization: state.organization
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addOrganization
  }, dispatch)
};

export const IndustryMainContainer = connect(mapStateToProps, mapDispatchToProps)(IndustryMain);

export default IndustryMainContainer;
