import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { usePopupStore } from "../../store/popupstore";

const CommonPopup = () => {
  const { isOpen, closePopup } = usePopupStore();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
  } = useForm({ mode: "onSubmit" }); // 👈 Only show errors after submit

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const userName = useWatch({
    control,
    name: "name",
    defaultValue: "Customer",
  });

  useEffect(() => {
    setValue("subject", `${userName} placed an order`);
  }, [userName, setValue]);

  const onSubmit = async (data, e) => {
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          setMessage("Order submitted successfully!");
          e.target.reset();
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Client Error. Please check console.");
        console.log(error);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-8 w-[90%] max-w-md shadow-xl relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          ✕
        </button>

        {!isSubmitSuccessful && (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Place Your Order
            </h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid gap-4 grid-cols-2"
            >
              <input
                type="hidden"
                value="dac2c29c-df63-4f86-9efb-925740290f61"
                {...register("access_key")}
              />
              <input type="hidden" {...register("subject")} />
              <input
                type="hidden"
                value="Sweet Bite Orders"
                {...register("from_name")}
              />

              {/* Full Name */}
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-red-300"
                  {...register("name", { required: "Full name is required" })}
                />
                {isSubmitted && errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-red-300"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Enter a valid email",
                    },
                  })}
                />
                {isSubmitted && errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-red-300"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter a valid 10-digit phone number",
                    },
                  })}
                />
                {isSubmitted && errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Address */}
              <div>
                <input
                  type="text"
                  placeholder="Delivery Address"
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-red-300"
                  {...register("address", {
                    required: "Address is required",
                  })}
                />
                {isSubmitted && errors.address && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.address.message}
                  </p>
                )}
              </div>

              {/* Item Name */}
              <div>
                <input
                  type="text"
                  placeholder="Item Name"
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-red-300"
                  {...register("item", {
                    required: "Item name is required",
                  })}
                />
                {isSubmitted && errors.item && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.item.message}
                  </p>
                )}
              </div>

              {/* Quantity */}
              <div>
                <input
                  type="number"
                  placeholder="Quantity"
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-red-300"
                  {...register("quantity", {
                    required: "Quantity is required",
                    min: { value: 1, message: "Minimum 1 item required" },
                  })}
                />
                {isSubmitted && errors.quantity && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.quantity.message}
                  </p>
                )}
              </div>

              {/* Notes (full row) */}
              <div className="col-span-2">
                <textarea
                  placeholder="Additional Notes"
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-red-300 h-24"
                  {...register("message")}
                ></textarea>
              </div>

              {/* Submit Button (own row) */}
              <div className="col-span-2">
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition"
                >
                  {isSubmitting ? "Submitting..." : "Submit Order"}
                </button>
              </div>
            </form>
          </>
        )}

        {/* Success Message */}
        {isSubmitSuccessful && isSuccess && (
          <div className="text-center py-8">
            <h3 className="text-green-500 text-2xl font-semibold mb-3">
              🎉 Order Sent Successfully!
            </h3>
            <p className="text-gray-700">{message}</p>
            <button
              onClick={() => {
                reset();
                closePopup();
              }}
              className="mt-5 bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        )}

        {/* Error Message */}
        {isSubmitSuccessful && !isSuccess && (
          <div className="text-center py-8">
            <h3 className="text-red-500 text-2xl font-semibold mb-3">
              ❌ Something went wrong
            </h3>
            <p className="text-gray-700">{message}</p>
            <button
              onClick={() => reset()}
              className="mt-5 bg-gray-300 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-400"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonPopup;
