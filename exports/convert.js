exports.km_to_mi = km => {
  return !isNaN(km) ? km + " is not a number." : km * 0.62 + " mi";
};

exports.km_to_ft = km => {
  return !isNaN(km) ? km * 3280.8 + " ft" : km + " is not a number";
};

exports.m_to_ft = m => {
  return !isNaN(m) ? m * 3.28 + " ft" : m + " is not a number";
};

exports.cm_to_in = cm => {
  return !isNaN(cm) ? cm * 0.39 + " in" : cm + " is not a number";
};

exports.mm_to_in = mm => {
  return !isNaN(mm) ? mm * 0.039 + " in" : mm + " is not a number";
};

exports.lt_to_qz = l => {
  return !isNaN(l) ? l * 1.057 + " qz" : l + " is not a number";
};

exports.lt_to_gl = l => {
  return !isNaN(l) ? l * 0.264 + " gl" : l + " is not a number";
};

exports.ml_to_cu = ml => {
  return !isNaN(ml) ? ml * 0.0042 + " cu" : ml + " is not a number";
};

exports.ml_to_oz = ml => {
  return !isNaN(ml) ? ml * 0.0338 + " oz" : ml + " is not a number";
};

exports.c_to_f = c => {
  return !isNaN(c) ? c * (9 / 5) + 32 + " F°" : c + " is not a number";
};

exports.kg_to_p = kg => {
  return !isNaN(kg) ? kg * 2.2046 + " p" : kg + " is not a number";
};

exports.g_to_oz = g => {
  return !isNaN(g) ? g * 0.035 + " oz" : g + " is not a number";
};

exports.g_to_p = g => {
  return !isNaN(g) ? g * 0.002205 + " p" : g + " is not a number";
};

exports.mg_to_oz = mg => {
  return !isNaN(mg) ? mg * 0.000035 + " oz" : mg + " is not a number";
};

exports.f_to_c = f => {
  return !isNaN(f) ? ((f - 32) * 5) / 9 + " C°" : f + " is not a number";
};

exports.in_to_m = inches => {
  return !isNaN(inches) ? inches * 0.0254 + " m" : inches + " is not a number";
};

exports.in_to_cm = inches => {
  return !isNaN(inches) ? inches * 2.54 + " cm" : +" is not a number";
};

exports.in_to_mm = inches => {
  return !isNaN(inches) ? inches * 25.4 + " mm" : inches + " is not a number";
};

exports.ft_to_m = f => {
  return !isNaN(f) ? f * 0.3 + " m" : f + " is not a number";
};

exports.y_to_m = y => {
  return !isNaN(y) ? y * 0.91 + " m" : y + " is not a number";
};

exports.y_to_km = y => {
  return !isNaN(y) ? y * 0.00091 + " km" : y + " is not a number";
};

exports.mi_to_km = km => {
  return !isNaN(km) ? km * 1.61 + " km" : km + " is not a number";
};

exports.oz_to_ml = ou => {
  return !isNaN(ou) ? ou * 29.57 + " ml" : ou + " is not a number";
};

exports.cu_to_ml = cu => {
  return !isNaN(cu) ? cu * 236.6 + " mm" : cu + " is not a number";
};

exports.qz_to_lt = q => {
  return !isNaN(q) ? q * 0.95 + " lt" : q + " is not a number";
};

exports.gl_to_lt = gl => {
  return !isNaN(gl) ? gl * 3.785 + " lt" : gl + " is not a number";
};

exports.oz_to_mg = ou => {
  return !isNaN(ou) ? ou * 28350 + " mg" : ou + " is not a number";
};

exports.oz_to_g = ou => {
  return !isNaN(ou) ? ou * 28.35 + " g" : ou + " is not a number";
};

exports.p_to_kg = p => {
  return !isNaN(p) ? p * 0.454 + " kg" : p + " is not a number";
};
