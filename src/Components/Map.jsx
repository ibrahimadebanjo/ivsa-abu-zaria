function MapEmbed() {
  return (
    <div className="w-full h-96 rounded-xl overflow-hidden shadow-md">
      <iframe
        title="IVSA Nigeria Location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3914.484503546394!2d7.646536920654308!3d11.151717999946166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1760287910383!5m2!1sen!2sng"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default MapEmbed;
