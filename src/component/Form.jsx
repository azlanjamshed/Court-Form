import { useForm } from "react-hook-form";
import { useState } from "react";
const courtComplex = [
  "Select Court Complex",
  "BARRACKPUR COURT COMPLEX",
  "BONGAO COURT COMPLEX",
  "BASIRHAT COURT COMPLEX",
  "BARASAT DISTRICT COURT COMPLEX",
  "JUVENILE COURT COMPLEX SALT LAKE",
  "BIDHANAGAR COURT COMPLEX",
  "COMMERCIAL COURT RAJARHAT",
  "MP_MLA COURT COMPLEX",
];
const caseType = {
  "BARRACKPUR COURT COMPLEX": [
    "Act 39",
    "Act Viii Miscellaneous Case",
    "Act Xiv",
    "Bail",
    "CEX",
    "Civil Appeal",
    "Civil Execution",
    "Civil Misc",
    "Civil Revision",
    "Complaint Case",
    "C R Case",
    "Criminal Appeal",
    "Criminal Case",
    "Criminal Misc Case",
    "Criminal Revision",
    "Crl. Execution",
    "Divorce On Mutual Consent",
    "Electricity Act",
    "Estate Acquisition Appeal",
    "Gr Case",
    "Hindu Adapt. and Maint Act",
    "Insolvency Petition",
    "L A C",
    "L A Ex.",
    "L A Suit",
    "M A C C",
    "M A C C Ex.",
    "Maintenance Case",
    "Matrimonial Suit",
    "Mc",
    "M C Case",
    "Misc. Appeal",
    "Misc Case (pre-emption)",
    "Misc. Criminal Revision",
    "Misc Crl Case",
    "Misc. Execution Case",
    "Misc Petition (156)",
    "Mjc",
    "Money Appeal",
    "Money Execution",
    "Money Suit",
    "M V Act",
    "N D P S Case",
    "NGR Case",
    "Other Appeal",
    "Other Suit",
    "Probate Suit",
    "S C C Ex.",
    "S C C Suit",
    "Sessions Case",
    "Sessions Trial",
    "Special Court Cases",
    "Succession Case",
    "Title Appeal",
    "Title Execution",
    "Title Suit",
    "Trust Suit",
  ],
  "BONGAO COURT COMPLEX": [
    "Act Viii Miscellaneous Case",
    "Arbitration Execution",
    "Bail",
    "Civil Appeal",
    "Civil Execution",
    "Civil Misc",
    "Civil Revision",
    "Complaint Case",
    "Criminal Appeal",
    "Criminal Case",
    "Criminal Misc.",
    "Criminal Revision",
    "Crl. Execution",
    "Divorce On Mutual Co",
    "Electricity Act",
    "Estate Acquisition Appeal",
    "Gr Case",
    "Hindu Adaptation and Maint Act",
    "Insolvency Petition",
    "L A C",
    "L A Ex.",
    "M A C C",
    "M A C C Ex.",
    "Mat Execution",
    "Matrimonial Suit",
    "Mc",
    "Misc. Appeal",
    "Misc Case (pre-emption)",
    "Misc. Criminal Revision",
    "Misc Crl Case",
    "Misc. Execution Case",
    "Mjc",
    "Money Appeal",
    "Money Execution",
    "Money Suit",
    "Mr Maintenance",
    "M V Act",
    "N D P S Case",
    "NGR Case",
    "Other Appeal",
    "Other Suit",
    "Probate Suit",
    "S C C Ex.",
    "S C C Suit",
    "Sessions Case",
    "Sessions Trial",
    "Special Court Cases",
    "Succession Case",
    "Title Appeal",
    "Title Execution",
    "Title Suit",
    "Trust Suit",
  ],
  "BASIRHAT COURT COMPLEX": [
    "S C C Suit",
    "Sessions Case",
    "Sessions Trial",
    "Special Court Cases",
    "Succession Case",
    "Title Appeal",
    "Title Execution",
    "Title Suit",
    "Trust Suit",
    "Act Viii Miscellaneous Case",
    "Arbitration Execution",
    "Bail",
    "Civil Appeal",
    "Civil Execution",
    "Civil Misc",
    "Civil Revision",
    "Complaint Case",
    "Criminal Appeal",
    "Criminal Case",
    "Criminal Misc.",
    "Criminal Revision",
    "Crl. Execution",
    "Divorce On Mutual Co",
    "Electricity Act",
    "Estate Acquisition Appeal",
    "Gr Case",
    "Hindu Adaptation and Maint Act",
    "Insolvency Petition",
    "L A C",
    "L A Ex.",
    "M A C C",
    "M A C C Ex.",
    "Mat Execution",
    "Matrimonial Suit",
    "Mc",
    "Misc. Appeal",
    "Misc Case (pre-emption)",
    "Misc. Criminal Revision",
    "Misc Crl Case",
    "Misc. Execution Case",
    "Mjc",
    "Money Appeal",
    "Money Execution",
    "Money Suit",
    "Mr Maintenance",
    "M V Act",
    "N D P S Case",
    "NGR Case",
    "Other Appeal",
    "Other Suit",
    "POCSO CASE",
    "Probate Suit",
    "S C C Ex.",
  ],
  "BARASAT DISTRICT COURT COMPLEX": [
    "Act Viii Miscellaneous Case",
    "Arb.execution",
    "Arbitration",
    "Bail",
    "Civil Appeal",
    "Civil Execution",
    "Civil Misc",
    "Civil Revision",
    "Complaint Case",
    "Criminal Appeal",
    "Criminal Case",
    "Criminal Misc.",
    "Criminal Revision",
    "Crl. Execution",
    "Crl Motion",
    "Divorce On Mutual Consent",
    "Electricity Act",
    "Estate Acquisition Appeal",
    "Gr Case",
    "Hindu Adaptation and Maint Case",
    "Insolvancy Petition",
    "L A C",
    "LA (CD)",
    "L A Ex.",
    "LRA Cases",
    "LRA Ex",
    "M A C C",
    "M A C C Ex.",
    "Mat Execution",
    "Matrimonial Suit",
    "Misc. Appeal",
    "Misc case",
    "Misc Case (pre-emption)",
    "Misc. Criminal Execution Case",
    "Misc. Criminal Revision",
    "Misc Crl Case",
    "Misc. Execution",
    "Mjc",
    "Money Appeal",
    "Money Execution",
    "Money Suit",
    "Mr Maintenance",
    "M V Act",
    "N D P S Case",
    "NGR Case",
    "Other Appeal",
    "Other Suit",
    "POCSO",
    "Probate Suit",
    "S C C Ex.",
    "S C C Suit",
    "Sessions Case",
    "Sessions Trial",
    "Special Court Cases",
    "Succession Case",
    "Title Appeal",
    "Title Execution",
    "Title Suit",
    "Trust Suit",
  ],
  "JUVENILE COURT COMPLEX SALT LAKE": [
    "Act 39",
    "Act Viii Miscellaneous Case",
    "Act Xiv",
    "Bail",
    "CA",
    "Civil Appeal",
    "Civil Execution",
    "Civil Misc",
    "Civil Revision",
    "Complaint Case",
    "Criminal Appeal",
    "Criminal Case",
    "Criminal Misc.",
    "Criminal Revision",
    "Crl. Execution",
    "Divorce On Mutual Consent",
    "Electricity Act",
    "Estate Acquisition Appeal",
    "Gr Case",
    "Hindu Adaptation & Maint Act",
    "Insolvancy Petition",
    "L A C",
    "L A Ex.",
    "L A Suit",
    "M A C C",
    "M A C C Ex.",
    "Matrimonial Suit",
    "Mc",
    "Misc. Appeal",
    "Misc Case (pre-emption)",
    "Misc. Criminal Revision",
    "Misc Crl Case",
    "Misc. Execution Case",
    "Misc. Petition",
    "Mjc",
    "Money Appeal",
    "Money Execution",
    "Money Suit",
    "Mr Maintenance",
    "M V Act",
    "N D P S Case",
    "NGR Case",
    "Other Appeal",
    "Other Suit",
    "POCSO",
    "Probate Suit",
    "S C C Ex.",
    "S C C Suit",
    "Sessions Case",
    "Sessions Trial",
    "Special Court Cases",
    "Succession Case",
    "Title Appeal",
    "Title Execution",
    "Title Suit",
    "Trust Suit",
  ],
  "BIDHANAGAR COURT COMPLEX": [
    "Act 39",
    "Act Viii Miscellaneous Case",
    "Act Xiv",
    "Bail",
    "Civil Appeal",
    "Civil Execution",
    "Civil Misc",
    "Civil Revision",
    "Complaint Case",
    "Criminal Appeal",
    "Criminal Case",
    "Criminal Misc.",
    "Criminal Revision",
    "Crl. Execution",
    "Divorce On Mutual Consent",
    "Electricity Act",
    "Estate Acquisition Appeal",
    "Gr Case",
    "HAM",
    "Insolvancy Petition",
    "L A C",
    "L A Ex.",
    "L A Suit",
    "M A C C",
    "M A C C Ex.",
    "Matrimonial Suit",
    "Mc",
    "Misc. Appeal",
    "Misc Case (pre-emption)",
    "Misc. Criminal Revision",
    "Misc Crl Case",
    "Misc. Execution Case",
    "Misc. Petition",
    "Mjc",
    "Money Appeal",
    "Money Execution",
    "Money Suit",
    "Mr Maintenance",
    "M V Act",
    "N D P S Case",
    "NGR Case",
    "Other Appeal",
    "Other Suit",
    "Probate Suit",
    "S C C Ex.",
    "S C C Suit",
    "Sessions Case",
    "Sessions Trial",
    "Special Court Cases",
    "Succession Case",
    "Title Appeal",
    "Title Execution",
    "Title Suit",
    "Trust Suit",
  ],
  "COMMERCIAL COURT RAJARHAT": [
    "Act Viii Miscellaneous Case",
    "Arbit. Case",
    "Bail",
    "Civil Appeal",
    "Civil Execution",
    "Civil Misc",
    "Civil Revision",
    "Commercial Appeal",
    "Commercial Suit",
    "Complaint Case",
    "Criminal Appeal",
    "Criminal Case",
    "Criminal Misc.",
    "Criminal Revision",
    "Crl. Execution",
    "Divorce On Mutual Consent",
    "Electricity Act",
    "Estate Acquisition Appeal",
    "Gr Case",
    "Hindu Adaptation and amp Maint Act",
    "Insolvency Petition",
    "Judicial Misc. Execution",
    "L A C",
    "L A Ex.",
    "Letters Of Administration",
    "M A C C",
    "M A C C Ex.",
    "Mat. Execution",
    "Matrimonial Suit",
    "M.Ex (Com)",
    "Misc. A (Com)",
    "Misc. Appeal",
    "Misc Appl",
    "Misc. Arb (Com)",
    "Misc Case",
    "Misc. Case (Com)",
    "Misc Case (pre-emption)",
    "Misc. Criminal Revision",
    "Misc Crl Case",
    "Misc. Ex (Com)",
    "Misc. Execution",
    "Misc. Execution Case",
    "Misc Judicial Case",
    "Money Appeal",
    "Money Execution",
    "Money Suit",
    "Mr Maintenance",
    "MS (Com)",
    "M V Act",
    "N D P S Case",
    "NGR Case",
    "Other Appeal",
    "Other Suit",
    "Probate Suit",
    "S C C Ex.",
    "S C C Suit",
    "Sessions Case",
    "Sessions Trial",
    "Special Court Cases",
    "Succession Case",
    "TA (Com)",
    "T. Ex (Com)",
    "Title Appeal",
    "Title Execution",
    "Title Suit",
    "Trust Suit",
    "TS (Com)",
  ],
  "MP_MLA COURT COMPLEX": [],
};
const Form = () => {
  const { register, handleSubmit, watch, setValue, reset } = useForm();
  const [captcha, setCaptcha] = useState(generateCaptcha());

  // const onSubmit = (data) => console.log("form dat:", data);
  const selectedCourtComplex = watch("courtComplex");

  function generateCaptcha() {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  const onSubmit = (data) => {
    if (data.captcha !== captcha) {
      alert("Invalid Captcha");
      return;
    }
    // Handle form submission logic here
    console.log("Form Data:", data);
    reset();
    setCaptcha(generateCaptcha());
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg space-y-4"
      >
        <span className="text-xs block text-left text-gray-500">
          All fields marked with * are required
        </span>

        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
          Case Status Search
        </h2>

        {/* Court Complex */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Court Complex<sup className="text-red-500">*</sup>
          </label>
          <select
            {...register("courtComplex", { required: true })}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            onChange={(e) => {
              setValue("courtComplex", e.target.value);
              setValue("caseType", "");
            }}
          >
            <option value="">-- Select Court Complex --</option>
            {courtComplex.map((complex) => (
              <option key={complex} value={complex}>
                {complex}
              </option>
            ))}
          </select>
        </div>

        {/* Case Type */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Case Type
          </label>
          <select
            {...register("caseType", { required: true })}
            disabled={!selectedCourtComplex}
            className="w-full border border-gray-300  rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500 disabled:bg-gray-100"
          >
            <option value="">-- Select Case Type --</option>
            {(caseType[selectedCourtComplex] || []).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Case Number */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Case Number<sup className="text-red-500">*</sup>
          </label>
          <input
            type="text"
            {...register("caseNumber", { required: true })}
            placeholder="Enter Case Number"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        {/* Year */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Year<sup className="text-red-500">*</sup>
          </label>
          <input
            type="number"
            {...register("year", {
              required: true,
              min: 1900,
              max: new Date().getFullYear(),
            })}
            placeholder="Enter Year"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        {/* Captcha */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Captcha<sup className="text-red-500">*</sup>
          </label>
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded font-mono text-lg tracking-widest shadow-inner">
              {captcha}
            </div>
            <button
              type="button"
              onClick={() => setCaptcha(generateCaptcha())}
              className="text-blue-600 hover:text-blue-800 text-sm underline"
            >
              Refresh
            </button>
          </div>
          <input
            type="text"
            {...register("captcha", { required: true })}
            placeholder="Enter Captcha"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold transition duration-300"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
