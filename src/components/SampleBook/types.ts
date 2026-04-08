export interface PutterSample {
  sample_number: string
  client: string
  item_name: string
  date: string
  shape: {
    head_type: '블레이드' | 'ブレード' | 'フルマレット' | 'セミマレット' | 'スクエアマレット' | 'ネオマレット'
    head_type_confidence: 'high' | 'medium' | 'low'
    head_type_reason: string
  }
  size: {
    reference_spec: string | null
    dimensions_noted: string | null
  }
  outer_material: { fabric: string; color: string }
  lining_material: { fabric: string; color: string }
  closure: { type: string; size: string | null; detail: string | null }
  color_scheme: {
    main_color: string
    tapes: {
      webbing_45mm: string | null
      nylon_25mm: string | null
      nylon_20mm: string | null
      grosgrain: string | null
    }
    hardware_color: string | null
  }
  decoration: {
    type: string
    print_widths: number[] | null
    embroidery_detail: string | null
  }
  logo: { type: string; color: string; pantone: string | null }
  packaging: string | null
  meta: {
    source_pdf: string
    image_file: string
    needs_review: boolean
    review_reason: string | null
  }
}
