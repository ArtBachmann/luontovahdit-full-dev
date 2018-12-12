const mongoose = require('mongoose')

const hotspotSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      validate: t => t.length > 0
    },
    /*addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },*/
    location: { // GeoJSON
      type: {
        type: String,
        enum: ['Point'],
        required: true
      },
      coordinates: {
        type: [Number],
        required: true,
        validate: { 
          validator: c => {
            return (
              c.length === 2 &&
              c[0] >= -180 && c[0] <= 180 &&
              c[1] >= -90 && c[1] <= 90
            )
          }
        }
      }
    },
    upVotes: {
      type: Number,
      default: 0
    },
    downVotes: {
      type: Number,
      default: 0
    },
    flagged: {
      type: Boolean,
      default: false
    },
    comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }]
  },
  { timestamps: true }
)

const Hotspot = mongoose.model('Hotspot', hotspotSchema)

module.exports = Hotspot