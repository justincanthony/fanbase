export const fetchArtist = async (artistName) => {
	const response = await fetch(
		`https://rest.bandsintown.com/artists/${artistName}/?app_id=888501139bcf6b4a81fec1c338f31325`,
		{ mode: 'cors' }
	);
	return await response.json();
};

export const fetchEvents = async (artistName) => {
	const response = await fetch(
		`https://rest.bandsintown.com/artists/${artistName}/events/?app_id=888501139bcf6b4a81fec1c338f31325`,
		{ mode: 'cors' }
	);
	return await response.json();
};
