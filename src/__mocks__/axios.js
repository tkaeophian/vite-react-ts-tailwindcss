const mockResponse = {
  data: {
    results: [{}],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
