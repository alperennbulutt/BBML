const parseError = (result) => {
  return {
    message: result.statusText || result.message || result.data,
    status: result.status,
    color: "danger",
    errStatus: true,
  };
};

const parseSuccess = (result) => {
  return {
    data: result.data,
    message: result.message || result.statusText,
    status: result.status,
    color: "success",
    errStatus: false,
    headers: result.headers,
  };
};

export const parseResult = (result) => {
  if (result.status > 399 || result.status < 200) {
    return parseError(result);
  }
  return parseSuccess(result);
};

export const parseCompileResult = (result) => {
  return { data: result.data };
};
