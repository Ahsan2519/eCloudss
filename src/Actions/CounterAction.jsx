export const INCREMENT_CUSTOMER_COUNT = 'INCREMENT_CUSTOMER_COUNT';
export const INCREMENT_EXPERIENCE_COUNT = 'INCREMENT_EXPERIENCE_COUNT';
export const INCREMENT_PROJECTS_COUNT = 'INCREMENT_PROJECTS_COUNT';

export const incrementCustomerCount = (value) => ({
  type: INCREMENT_CUSTOMER_COUNT,
  payload: value,
});

export const incrementExperienceCount = (value) => ({
  type: INCREMENT_EXPERIENCE_COUNT,
  payload: value,
});

export const incrementProjectsCount = (value) => ({
  type: INCREMENT_PROJECTS_COUNT,
  payload: value,
});