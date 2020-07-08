import Constants from './../Constants';

export const addOrganization = (param) => ({
  type: Constants.ADD_ORGANIZATION,
  param
})

export const getOrganizations = () => ({
  type: Constants.GET_ORGANIZATIONS
})

export const getOrganization = (orgId) => ({
  type: Constants.GET_ORGANIZATION,
  orgId
})
