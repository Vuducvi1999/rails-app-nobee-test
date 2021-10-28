class BaseService
  def self.call(*arg)
    new(*arg).call
  end

  def call
    raise NotImplementedError, "Missing instance method call at #{self.class} class"
  end
end
