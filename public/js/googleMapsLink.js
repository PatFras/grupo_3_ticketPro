function generateGoogleMapsLink(description, address, location) {
  const fullAddress = `${description}, ${address}. ${location}`;
  const encodedAddress = encodeURIComponent(fullAddress);
  return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
}

module.exports = generateGoogleMapsLink;
