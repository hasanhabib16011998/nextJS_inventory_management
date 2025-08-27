"use client"

export default function TextAreaInput({ label, name, register, errors, isRequired = true, type = "text", containerWidth = "sm:col-span-2" }) {
    return (
        <div className={containerWidth}>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 leading-6">{label}</label>
            <div className="mt-2">
                <textarea
                    {...register(`${name}`, { required: isRequired })}
                    type={type}
                    name={name}
                    id={name}
                    autoComplete={name}
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder={`Type the ${name}`}
                />
                {errors.description && (
                    <span className="text-sm text-red-600 ">
                    {label} is required
                    </span>
                )}
            </div>

        </div>
    )
}
