type Props = {
  inputs: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    password: string;
  };
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSignin: boolean;
};

export default function AuthModalInputs({
  inputs,
  handleChangeInput,
  isSignin,
}: Props) {
  return (
    <div>
      {isSignin ? null : (
        <div className="my-3 flex justify-between text-sm">
          <input
            className="w-[49%] rounded border px-2 py-3"
            type="text"
            placeholder="First Name"
            value={inputs.firstName}
            name="firstName"
            onChange={handleChangeInput}
          />
          <input
            className="w-[49%] rounded border px-2 py-3"
            type="text"
            placeholder="Last Name"
            value={inputs.lastName}
            name="lastName"
            onChange={handleChangeInput}
          />
        </div>
      )}
      <div className="my-3 text-sm">
        <input
          className="w-full rounded border px-2 py-3"
          type="text"
          placeholder="Email"
          value={inputs.email}
          name="email"
          onChange={handleChangeInput}
        />
      </div>
      {isSignin ? null : (
        <div className="my-3 flex justify-between text-sm">
          <input
            className="w-[49%] rounded border px-2 py-3"
            type="text"
            placeholder="Phone"
            value={inputs.phone}
            name="phone"
            onChange={handleChangeInput}
          />
          <input
            className="w-[49%] rounded border px-2 py-3"
            type="text"
            placeholder="City"
            value={inputs.city}
            name="city"
            onChange={handleChangeInput}
          />
        </div>
      )}
      <div className="my-3 text-sm">
        <input
          className="w-full rounded border px-2 py-3"
          type="password"
          placeholder="Password"
          value={inputs.password}
          name="password"
          onChange={handleChangeInput}
        />
      </div>
    </div>
  );
}
