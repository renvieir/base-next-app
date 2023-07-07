import { fireEvent, render, screen } from "@testing-library/react";
import { Slider } from "./Slider";

describe("<Slider />", () => {
  const closeFn = jest.fn();
  const changeFn = jest.fn();
  const makeSut = () =>
    render(
      <Slider onStepChange={changeFn} onClose={closeFn}>
        hello
      </Slider>
    );

  beforeEach(() => {
    closeFn.mockClear();
    changeFn.mockClear();
  });

  it("should render properly", () => {
    makeSut();
    const header = screen.getByText(/Attachment Finder/i);
    const closeBtn = screen.getByRole("button", { name: /Close/i });
    const content = screen.getByText("hello");
    const help = screen.getByRole("link", { name: /Talk to an expert/i });
    const backBtn = screen.getByRole("button", { name: /Back/i });
    const nextBtn = screen.getByRole("button", { name: /Next/i });
    expect(header).toBeInTheDocument();
    expect(closeBtn).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(help).toBeInTheDocument();
    expect(backBtn).toBeInTheDocument();
    expect(nextBtn).toBeInTheDocument();
  });

  it("should call close function", async () => {
    makeSut();
    const closeBtn = screen.getByRole("button", { name: /Close/i });
    fireEvent.click(closeBtn);
    expect(closeFn).toHaveBeenCalledTimes(1);
  });

  it("should go to next page", async () => {
    makeSut();
    const nextBtn = screen.getByRole("button", { name: /Next/i });
    expect(screen.getByText("Step 1", { exact: false })).toBeInTheDocument();
    fireEvent.click(nextBtn);
    expect(changeFn).toHaveBeenCalledTimes(1);
    const nextStep = await screen.findByText("Step 2", { exact: false });
    expect(nextStep).toBeInTheDocument();
  });

  it("should go to previous page", async () => {
    makeSut();
    const backBtn = screen.getByRole("button", { name: /Back/i });
    const nextBtn = screen.getByRole("button", { name: /Next/i });
    expect(screen.getByText("Step 1", { exact: false })).toBeInTheDocument();
    fireEvent.click(nextBtn);
    expect(changeFn).toHaveBeenCalledTimes(1);
    const nextStep = await screen.findByText("Step 2", { exact: false });
    expect(nextStep).toBeInTheDocument();
    fireEvent.click(backBtn);
    expect(changeFn).toHaveBeenCalledTimes(2);
    const previousStep = await screen.findByText("Step 1", { exact: false });
    expect(previousStep).toBeInTheDocument();
  });

  it("should not change step less then 1", async () => {
    makeSut();
    const backBtn = screen.getByRole("button", { name: /Back/i });
    expect(screen.getByText("Step 1", { exact: false })).toBeInTheDocument();
    fireEvent.click(backBtn);
    expect(changeFn).not.toHaveBeenCalled();
    const previousStep = await screen.findByText("Step 1", { exact: false });
    expect(previousStep).toBeInTheDocument();
  });
});
