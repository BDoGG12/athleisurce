const generateRandomId = (length) => {
  const timestamp = Date.now().toString(36); // Convert timestamp to base 36
    const randomSegment = Array.from({length}, () => Math.floor(Math.random() * 36).toString(36)).join('');
    return timestamp + randomSegment;
};

export generateRandomId;