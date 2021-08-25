function collectionToLite(c) {
    return {
        count: c.count,
        start: c.start,
        subject_collection: {
            subject_count: c.subject_collection.subject_count,
            collect_count: c.subject_collection.collect_count,
            background_color: c.subject_collection.background_color,
            background_color_scheme: c.subject_collection.background_color_scheme,
            cover_url: c.subject_collection.cover_url,
            bg_img_vertical: c.subject_collection.bg_img_vertical,
            name: c.subject_collection.name,
            summary_chart_name: c.subject_collection.summary_chart_name,
            header_bg_image: c.subject_collection.header_bg_image,
            rank_type: c.subject_collection.rank_type,
            id: c.subject_collection.id,
            wx_qr_code: c.subject_collection.wx_qr_code
        },
        total: c.total,
        subject_collection_items: c.subject_collection_items.map(function(c) {
            return {
                cover: c.cover,
                interest: c.interest,
                title: c.title
            };
        })
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.collectionToLite = collectionToLite;