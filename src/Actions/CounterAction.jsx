export const INCREMENT_CUSTOMER_COUNT = 'INCREMENT_CUSTOMER_COUNT';
export const INCREMENT_EXPERIENCE_COUNT = 'INCREMENT_EXPERIENCE_COUNT';
export const INCREMENT_PROJECTS_COUNT = 'INCREMENT_PROJECTS_COUNT';

export const incrementCustomerCount = () => ({
  type: INCREMENT_CUSTOMER_COUNT,
});

export const incrementExperienceCount = () => ({
  type: INCREMENT_EXPERIENCE_COUNT,
});

export const incrementProjectsCount = () => ({
  type: INCREMENT_PROJECTS_COUNT,
});